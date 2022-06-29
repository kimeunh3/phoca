import { NextPage } from "next";
import { VocabularyWrapper } from "../../components/vocabulary/Vocabulary.styles";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "../../common/utils/constant";
import VocabularyMarkHeader from "../../components/vocabulary/VocabularyMarkHeader";
import VocabularyItem from "../../components/vocabulary/VocabularyItem";
import { useEffect, useState } from "react";
import { userStore } from "../../zustand/userStore";
import { useQuery, useQueryClient } from "react-query";
import { WordBook, BookMark } from "../../common/types/resultsType";
import { vocaKeys } from "../../common/querykeys/querykeys";
import Seo from "../../common/Seo";

const Vocabulary: NextPage = () => {
  const [vocaList, setVocaList] = useState<WordBook[] | undefined>([]);
  const [mainText, setMainText] = useState("내 단어장");
  const [checked, setChecked] = useState(false);

  const user = userStore((state) => state.user);
  const queryClient = useQueryClient();

  const { data } = useQuery<WordBook[], Error>(
    [vocaKeys.getAll, checked],
    () => getVocaList(user?.userId),
    {
      enabled: !!user?.userId,
    },
  );

  async function getVocaList(userId?: string) {
    console.log("result", checked);
    const res = await fetch(
      checked
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/bookmark/${userId}`
        : `${process.env.NEXT_PUBLIC_SERVER_URL}/wordbook/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      },
    );
    const result = await res.json();
    let bookmark: WordBook[] = [];
    checked && result.map((item: BookMark) => bookmark.push(item.wordbook));

    return checked ? bookmark : result;
  }

  useEffect(() => {
    console.log("data", data);
    setVocaList(data);
  }, [data]);

  useEffect(() => {
    queryClient.invalidateQueries(vocaKeys.getAll);
  }, [checked]);

  const checkHandler = () => {
    setChecked(!checked);
    checked ? setMainText("내 단어장") : setMainText("북마크한 단어장");
  };

  return (
    <>
      <Seo title="단어장" />
      <VocabularyWrapper
        $sideBarWidth={`${SIDEBAR_WIDTH}`}
        $headerHeight={`${HEADER_HEIGHT}`}>
        <VocabularyMarkHeader
          checkHandler={checkHandler}
          mainText={mainText}
          inputChecked={checked}
          userInfo={user}
        />
        <VocabularyItem listItem={vocaList && vocaList} />
      </VocabularyWrapper>
    </>
  );
};

export default Vocabulary;
