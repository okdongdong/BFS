# README

## 👨‍👦‍👦크루원 소개👨‍👧‍👧

### 우리 무슨 팀

👸 강동옥 - *frontend -* [PrincessOk](https://github.com/okdongdong)

⚽ 김도훈 - *PM, data analysis -* [DoZZang](https://github.com/DHKim95)

🎵 김태현 - *data analysis -* [xogxog](https://github.com/xogxog)

🐢 양지훈 - *backend -*  [KkoBug](https://github.com/kkobug)

🧘‍♀️ 전호정 - *frontend -* [hoho](https://github.com/hojeong33)

🧙‍♂️ 정성우 - *backend -* [SpringLeader](https://github.com/jsw3788)



---

### Git Branch

**✨ (master) → (release) → (develop) → (backend / frontend) → (feature/<BE/FE>/<feature>)**

- `master` : release branch

- `release` : jenkins build

- `develop` : 단위기능 개발

- `backend` : backend branch

- `frontend` : frontend branch

- `feature/<BE/FE>/<feature>` : 개별 개발 branch 

​		예시) `feature/FE/login`



### Commit 규칙

✨ **형태 : git commit -m '#[지라이슈번호] [git 컨벤션]: [작업내용]'**

예시 )

```
git commit -m '#[지라이슈번호] feat
페이지네이션 기능 추가'

git commit -m '#[지라이슈번호] style
버튼 스타일링'

git commit -m '#[지라이슈번호] fix
팝업 버그 수정'

git commit -m '#[지라이슈번호] docs
리드미 수정'
```



**Git 컨벤션**

- feat : 새로운 기능
- fix : 버그 수정
- docs : 문서 (문서 추가, 수정, 삭제)
- style : 포맷팅, 세미콜론 추가, etc) 코드 변화 없을 때
- refactor : 코드 리팩토링
- test : 테스트 추가, 테스트 리팩토링
- chore: 빌드 업무 수정, 패키지 매니지 수정



**Transition 사용하기**

- [“Resolves” “Fixes” “Closes”] + [지라이슈번호] + [내용]

 	→ Commit Message 혹은 MR Description에 [“Resolves” “Fixes” “Closes”] + 이슈 아이디가 있으면 이슈가 자동으로 닫힘. 





### 🛠주요기술스택

**Backend**

- SpringBoot
- JPA
- MySQL
- Redis
- ElasticSearch
- Django

**Frontend**

- React
- Node.js,
- VisualStudioCode

**DataAnalysis**

- BeautifulSoup
- crontab
- Numpy
- Pandas 
- Selenium



### 아키텍쳐

![20220317_221203](/uploads/648d322bf5915c359a191fe3bc0b2643/20220317_221203.png)



### DB 구조

![BFC_ERD](/uploads/3f8b89d5660e649a719b92264bf89b88/BFC_ERD.png)



### 참고

- [와이어프레임](https://www.figma.com/file/bICixqqXgLeObjjRYmld3i/%ED%8A%B9%ED%99%94?node-id=82%3A4)

- [API 명세서](https://past-raptorex-bdf.notion.site/API-e141f4b56dc84d0ab4cf1e7d60ebf7d1)
- [기능명세서](https://past-raptorex-bdf.notion.site/1d4a78e559734e8584757bbff46f148f?v=f60344b1bf8640e4a9c0e7379a23eaec)
