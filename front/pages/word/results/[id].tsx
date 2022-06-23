import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import {
  WORD_NOTE_WIDTH,
  WORD_NOTE_HEIGHT,
} from "../../../common/utils/constant";
import Note from "../../../common/note/Note";
import Results from "../../../components/word/results/Results";
import { ResultProps, WordInfo } from "../../../common/types/resultsType";

const ResultPage: NextPage<ResultProps> = (props) => {
  const router = useRouter();
  const wordId = router.query.id;
  const { data } = useQuery("wordInfo", () => getWord(wordId), {
    initialData: props.wordInfo,
  });

  return (
    <Note width={WORD_NOTE_WIDTH} height={WORD_NOTE_HEIGHT}>
      <Results wordInfo={data} />
    </Note>
  );
};

const getWord = async (wordId: string | string[] | undefined) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/word/${wordId}`,
  );
  const result = await res.json();
  return result;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const wordId = context.query.id;
  const wordInfo: WordInfo = await getWord(wordId);
  return {
    props: { wordInfo },
  };
};

export default ResultPage;
