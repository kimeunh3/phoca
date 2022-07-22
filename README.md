# **Phoca ('Pho'to + Vo'ca')**

**📝 나만의 영단어장 서비스**

- 직접 찍은 사진의 사물을 인식하여 영단어로 변환해줍니다.
- 만들어진 단어장의 단어들을 학습할 수 있는 컨텐츠를 제공합니다.

[주요 기능 시연 영상](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/03dd94dd-a4e3-446b-a4ae-de0a5684d4af/%EC%8B%9C%EC%97%B0%EC%98%81%EC%83%81_%ED%81%AC%EB%A1%AD.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T060912Z&X-Amz-Expires=86400&X-Amz-Signature=d3065954667e2a89e7f8a15e6fe6d17697a60564dfec9e7f8fa1e9dc54e16072&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%258B%259C%25EC%2597%25B0%25EC%2598%2581%25EC%2583%2581%2520%25ED%2581%25AC%25EB%25A1%25AD.mp4%22&x-id=GetObject) <br>
![image](https://user-images.githubusercontent.com/59808674/176880303-1b710483-03c5-4314-b2ee-271d6a02471a.png) 


## 1. 프로젝트 소개



### 💡 기획 의도
- 언어를 배울 때 단어암기만큼 기본적인 요소는 없다.
- 언제 쓰일지도 모르는 초등 필수 영단어 800개를 의무적으로 외운다.
- 남의 정해주는 단어들을 외우다 보면, 지루해지기 마련이다.
- **내가 직접 찍은 사진으로 나만의 단어장을 만든다면?**

### 📍 목적 및 필요성
- 점점 직접 해내고 이뤄내고 싶은 것들이 많아지는 초등학교 학생들을 대상으로 합니다.
- 자기 자신이 배우고 싶은 주변 사물을 직접 찍으며 흥미를 잃지 않고 단어 학습을 할수 있게 돕습니다.

### ✨기대효과
- 단순히 일방적인 학습이 아닌, 사용자가 학습 자료를 직접 만드는 쌍방향 학습
- 흥미를 지속적으로 유지하며 시각적인 매체를 통한 단기 학습 기억 향상

### 🎈 활용방안
- 어린 아이 뿐만 아니라 저시력자들에게도 효과적인 배움을 제공 가능
- 청소년이나 성인들로 대상을 확장하여 문장 단위의 재미있는 영어 학습 서비스로 개발 가능

## 2. 기술 스택 및 기술 문서

### 📚 기술 스택

📕 **Front-end**
    <details>
        - 다른 설정을 할 필요 없이 SSR(ServerSideRendering)을 구현할 수 있습니다. <br>
        - link, image, router 등 다양한 컴포넌트 및 객체를 제공하여 편리한 개발이 가능합니다. <br>
        - react-router-dom을 사용하지 않고 편하게 page routing을 할 수 있습니다. <br>
        - SEO(검색 엔진 최적화) 기능을 제공합니다. <br>
    <summary>**`Next.js`**</summary></details>
    <details>
            - css in js로 스타일 적용 시 className으로 css가 들어가는 것이 아닌 커스텀한 컴포넌트를 사용하는 것이기 때문에 코드를 좀 더 쉽게 파악할 수 있습니다. <br>
        - 같은 css in js인 Styled-Components와 비교하였을 때 styletron은 문자열이 아닌 객체로 들어가기 때문에 코드 작성 및 이해가 수월합니다. <br>
        - atomic css를 기반으로 만들어졌기 때문에 css 코드 중복성을 줄여 매우 가볍습니다. <br>
    <summary>**`styletron.js`**</summary>
    </details>
    <details>
        - api 요청을 관리할 수 있습니다.<br>
        - api 요청을 캐싱하여 요청에 대한 정보를 확인할 수 있습니다.<br>
        - 오래된 데이터이면 쿼리 무효화를 통해 새 데이터를 가져오도록 할 수 있습니다.<br>
        - 요청의 loading, success, error 상태를 쉽게 파악할 수 있으며 이에 따른 처리가 가능해 유저에게 현재 상태를 보여줄 수 있습니다.<br>
        - 옵션을 통해 요청 보낼 시점을 자유롭게 정할 수 있습니다. <br>
    <summary>**`React-Query`**</summary>
    </details>
    <details>
        - action, reducer 등 복잡하게 선언할 필요없이 create 함수를 이용해 state와 state를 변경하는 action만 선언하면 되기때문에 같은 상태 관리 툴인 redux에 비해 러닝커브가 낮은 편에 속합니다. <br>
    - redux의 제일 큰 장점인 redux-devtool을 사용할 수 있어 devtool을 통해 state를 바로 확인할 수 있습니다. <br>
    <summary>**`Zustand`**</summary>
    </details>
<br>
📘 **Back-end**
    <details>
        - 정렬 알고리즘이 우수하며, 동시성이 효율적으로 작동하기 때문에 데이터 무결성 측면에서 채택했습니다. <br>
    <summary>**`PostgreSQL`**</summary>
    </details>
    <details>
        - controller, service, module 로 통일성 있는 구조를 만들어 애플리케이션의 안정성을 높일 수 있으며 Typescript 기반으로 코드 재사용성에서 강점을 가집니다.<br>
    <summary>**`NestJS`**</summary>
    </details>
    <details>
        - 높은 내구성을 가지며 객체 갯수 제한없이 많은 정보를 안전하게 저장할 수 있습니다.<br>
    <summary>**`AWS S3`**</summary>
    </details>
    <details>
        - 클라우드 기반의 완전관리형 DBMS로 데이터베이스 설정과 초기 구축 시간을 줄일 수 있습니다. <br>
    <summary>**`GCP SQL`**</summary>
    </details>
    <details>
        - 독립적인 개발 환경 (컨테이너)를 제공하여 빠른 확장성을 보장하고, 반복적인 배포가 용이합니다. <br>
    <summary>**`Docker`**</summary>
    </details>
**📗 AI**
    <details>
        -  tensorflow.js라는 선택지도 있었지만 Python-to-JavaScript 보다 Python-to-Python이 더 코드가 용이하고 가볍다는 판단을 하였습니다. <br>
    <summary>**`Flask`**</summary>
    </details>
    <details>
        - 1-Stage Detector기 때문에 위치를 찾는 문제(localization)와 분류(classification) 문제를 한번에 해결 가능합니다. <br>
        - 위와 같은 이유로 2-Stage Detector보다 가볍고 빠릅니다. <br>
    <summary>**`YOLO`**</summary>
    </details>
    <details>
        - 고성능이 아닌 환경에서도 잘 돌아가야 하기 때문에 선택하였습니다. <br>
    <summary>**`MobileNet`**</summary>
    </details>

<!--
| 📕 Front-end | 📘 Back-end | 📗 AI |
| :---: | :---: | :---: |
|Next.js<br />Typescript<br />React Query<br />Zustand<br />Styletron<br />|Nest.js<br />Typescript<br />TypeORM<br />PostgreSQL<br />AWS S3<br />GCP<br />Docker<br />|Python<br />Jupyter<br />TensorFlow<br />yolo<br />Flask<br />|
-->

### 🗃 시스템 아키텍처
<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba25ed50-07b1-4fc6-824e-34e414a67ba7%2FUntitled.png?table=block&id=8d7aa53c-28c6-4a19-8bba-bd5238e3cafa&spaceId=530d1033-cf9f-41a2-b140-62d3e90887dd&width=1440&userId=533bd621-7213-4fea-852f-906b32167253&cache=v2" width="700" height="400">
<!-- ![image](https://user-images.githubusercontent.com/59808674/176872369-f3cee8a6-fa93-4064-a4aa-b838eccd7b4c.png)   -->

### 🛠 ER-Diagram
![image](https://user-images.githubusercontent.com/59808674/176872435-04b84c54-7552-4814-9825-e51f71d738c7.png)  

### 📃 API 명세서
- [Swagger API 레퍼런스](https://app.swaggerhub.com/apis/PHOCAHELP/phoca-api-docs/1.0)

### 🖼 와이어프레임
- [Figma](https://www.figma.com/file/L48aThyqqlQRMsaaUQqMXa/DEVMON)

### ✏️ 페이지 구성
- [페이지 구조도](https://docs.google.com/presentation/d/1QL8OPu8S15w3KxqbH98gFQPMWTYT4LKqY2QzRIV98rQ/edit?usp=sharing)

## 3. 기능

### 프로젝트 전체 기능 정리
- [프로젝트 전체 기능 정리](https://kdt-gitlab.elice.io/ai_track/class_04/ai_project/team6/ai-project/-/wikis/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%84%EC%B2%B4-%EA%B8%B0%EB%8A%A5-%EC%A0%95%EB%A6%AC)

### ⚙ 메인 기능
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a8d5e303-b470-4f5a-b8bd-a6dd8b5a15ce/%EB%8B%A8%EC%96%B4%EC%9E%A5%EB%A7%8C%EB%93%A4%EA%B8%B0.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T063902Z&X-Amz-Expires=86400&X-Amz-Signature=cd77b519204d223fc51070676c9c0c4984e8139f19d51bd3dd904e71c51c261d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%258B%25A8%25EC%2596%25B4%25EC%259E%25A5%25EB%25A7%258C%25EB%2593%25A4%25EA%25B8%25B0.gif%22&x-id=GetObject"  width="700" height="380"> <br>
- 이미지 인식 후 단어로 변환
    - 사진에 찍힌 사물들을 AI가 인식하여 영단어와 한글 뜻으로 변환해줍니다
- 나만의 단어장 만들기
    - 이미지 인식으로 만든 단어들로 나만의 단어장을 만듭니다.
    <br>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/731d08e1-6636-4087-8c52-879f50f0e968/word111.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T065558Z&X-Amz-Expires=86400&X-Amz-Signature=f64f5a5f220fc7071972a350e94ed0d9f2b67d8dd3a0c4e041641baec28c68a3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22word111.gif%22&x-id=GetObject"  width="700" height="380"> </br>
- 그림 단어 게임
    - 임의의 영단어가 주어지면 해당 단어를 AI가 맞출 수 있도록 직접 그림을 그려봅니다.

### 🔧 서브 기능
- 단어장 학습 컨텐츠
    - 단어장 암기 페이지: 단어장의 사진과 영단어, 뜻을 암기할 수 있는 페이지가 주어집니다.
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/acd67185-dd59-4cd9-9f85-c5a698c29ae0/word111.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T065833Z&X-Amz-Expires=86400&X-Amz-Signature=70a9d8ecc79352660e38f64b94afdd4c3ef17b9b8f296228ae669639110564f7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22word111.gif%22&x-id=GetObject"  width="700" height="380"> </br>
    - 카드 짝 맞추기 게임: 단어장의 사진과 영단어를 짝을 맞추며 자연스럽게 암기를 도와줍니다.
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1e8e936-c229-4c89-a2a6-6eb971a95eeb/word111.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T065746Z&X-Amz-Expires=86400&X-Amz-Signature=121f63907d7b92d1335279f402b073d407a1ef7d3edce1cae26833e79122faee&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22word111.gif%22&x-id=GetObject"  width="700" height="380"> </br>

- 다른 유저 단어장 검색 및 북마크
    - 다른 유저가 만든 단어장도 학습할 수 있게 검색하고, 북마크를 합니다.
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e924e9f9-7219-4c28-abf9-a41c14ac1ceb/word1.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220722T070020Z&X-Amz-Expires=86400&X-Amz-Signature=74fcf3ad7f36a450f0c5c82864eb6d8b57d8261c0594227b7c1d4fd13ef27ed0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22word1.gif%22&x-id=GetObject"  width="700" height="380"> </br>
- 단어를 읽어주는 TTS 서비스  
    - 단어의 발음을 읽어주는 서비스 입니다.

## 4. 팀 소개
| 이름 | 역할 | 담당 부분 |
| --- | --- | --- |
| 김은혜 | 팀장, AI | 1. 프로젝트 진행 상황 확인 <br> 2. 사물 인식 모델 적용 <br> 3. Flask 서버 구축 <br> 4. 시스템 아키텍처 제작 |
| 조인철 | AI | 1. 그림 퀴즈 모델 적용  <br> 2. 최종 발표 |
| 백지유 | FE, 서기 | 1. UI/UX 디자인  <br> 2. 기술 스택 관련 세팅(next.js, react-query, zustand, styletron)  <br> 3. 페이지 구현 <br>   - 단어장 만들기  <br>  - 단어 상세 정보  <br>  - 그림 퀴즈 하러가기  <br>   - 단어 퀴즈 하러가기 <br>  - 단어장 외우기 <br>   - 로그인/회원가입 <br>4. 스크럼 회의록 작성 및 Wiki 관리  <br>5. 페이지 구성도 제작 |
| 이창민 | FE | 1. 페이지 구현 <br>  - 메인페이지 <br>  - 마이페이지 <br>  - 학습가이드 페이지 <br>  - 단어장 네트워크 페이지 <br>  - 내 단어장/북마크한 단어장 페이지 <br>  - 단어퀴즈 |
| 남혜민 | BE | 1. DB 설계 및 관리 <br>2. API 설계 및 구현: 유저 및 인증 API 구현 <br>3. API 문서화 <br>4. 인공지능 서버 배포 <br>5. 중간발표 |
| 김신웅 | BE | 1. API 설계 및 구현: 단어장, 단어, 퀴즈 API 구현  <br>2. 백엔드 서버 배포 |

