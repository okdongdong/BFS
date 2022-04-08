

## 🏖 부산풀코스

------

- [부산풀코스](https://j6e201.p.ssafy.io/)

- 부산풀코스는 부산의 여행지나 맛집 정보를 추천 받고 여행 플래너를 작성할 수 있는 서비스입니다.





  ### ***📌*** 차례

------







  ### 🎞 서비스 소개

------







  ### ***⚙*** 주요 기술 스택

------

  <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=SpringBoot&logoColor=ffffff" /><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=ffffff" /><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=ffffff"/><img src="https://img.shields.io/badge/redux-764ABC?style=flat-square&logo=react&logoColor=ffffff"/><img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=ffffff"/><img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=ffffff" /><img src="https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=Jupyter&logoColor=ffffff" />

  - **Backend**
    
    - **SpringBoot** (2.6.4) : Restful API 구현
    - **JPA** : ORM 기술을 활용하여 객체 지향적이고 생산성이 높은 개발을 추구함.
    - **QueryDSL** (5.0.0) : 컴파일 타임에 에러를 잡고 동적 쿼리를 사용하기 위해 사용
    - **MySQL** (8.0.28) : RDBMS로 서비스에 필요한 데이터들을 저장
    - **Redis** (3.0.504) : 비회원이 조회하는 인기 맛집 및 여행지(이하 장소) 데이터처럼 자주 접근하는 쿼리를 캐싱하여 효율성을 높이고 리프레시 토큰에 TTL을 적용하여 보다 나은 보안성을 추구함.
    - **Elasticsearch** (7.10.1) : 장소 검색을 위한 검색 엔진으로 사용하고 geo_distance 쿼리를 이용하여 근처에 위치한 장소를 검색하기 위해 사용
    - **Docker** (20.10.13) : 각 프로젝트를 컨테이너로 관리하여 빌드-배포
    - **Jenkins** (:lts) : pipeline을 이용한 빌드 및 배포 자동화
    
    
    
  - **Frontend**
    
    - **React** (17.0.2) : SPA구현
    - **Redux** (4.1.2) : 글로벌 변수관리과 상태관리를 위해 리덕스 사용
    - **TypeScript** (4.6.2) :  변수의 타입을 명확히 하여 버그를 사전에 방지하기 위해 사용
    
    
    
  - **DataAnalysis**
    - **Django**
    - **BeautifulSoup**
    - **Crontab**
    - **Numpy**
    - **Pandas**
    
    

  ### ***🔨*** 아키텍쳐

------

![image](https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22E201/uploads/83e5df4137bb7152a50fd2e9bf4267da/image.png)





  ### ***🔗*** ER Diagram

------



![image](https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22E201/uploads/663bc8f72ba875373f44e8fe54e79965/image.png)





  ### ***🌿*** Git Branch

---

```markdown
✨ (master) → (release) → (develop) → (backend / frontend) → (feature/<BE/FE>/<feature>)
```

- `master` : release branch

- `release` : jenkins build

- `develop` : 단위기능 개발

- `backend` : backend branch

- `frontend` : frontend branch

- `feature/<BE/FE>/<feature>` : 개별 개발 branch 



  ### ✔ Commit 규칙

------



```
✨ 형태 : git commit -m '#[지라이슈번호] [git 컨벤션]: [작업내용]'


  예시 ) `git commit -m '#[지라이슈번호] feat 페이지네이션 기능 추가'`

  ```
git commit -m '#[지라이슈번호] style 버튼 스타일링'
git commit -m '#[지라이슈번호] fix 팝업 버그 수정'
git commit -m '#[지라이슈번호] docs 리드미 수정'
  ```

  Git 컨벤션

  - feat : 새로운 기능
  - fix : 버그 수정
  - docs : 문서 (문서 추가, 수정, 삭제)
  - style : 포맷팅, 세미콜론 추가, etc) 코드 변화 없을 때
  - refactor : 코드 리팩토링
  - test : 테스트 추가, 테스트 리팩토링
  - chore: 빌드 업무 수정, 패키지 매니지 수정

  **Transition 사용하기**

  - [“Resolves” “Fixes” “Closes”] + [지라이슈번호]

  → MR Description에 [“Resolves” “Fixes” “Closes”] + 이슈 아이디가 있으면 이슈가 자동으로 닫힘. (Commit Message에서도 가능하지만 혼란을 방지하기 위해 사용하지 않기로 함)

  
```

   

  ### 🍩 강알리 등킨드나쓰 팀원

------

  - **김도훈** \- *PM, data analysis -* [DoZZang](https://github.com/DHKim95)
    - [tbvjdkrak2@gmail.com](mailto:tbvjdkrak2@gmail.com)
  - **강동옥** \- *frontend -* [PrincessOk](https://github.com/okdongdong)
    - [kjch6411@gmail.com](mailto:kjch6411@gmail.com)
  - **김태현** \- *data analysis -* [xogxog](https://github.com/xogxog)
    - [nasa0939@gmail.com](mailto:nasa0939@gmail.com)
  - **양지훈** \- *backend -*  [KkoBug](https://github.com/kkobug)
    - [kelvin9149@gmail.com](mailto:kelvin9149@gmail.com)
  - **전호정** \- *frontend -* [hoho](https://github.com/hojeong33)
    - [jhj20071@gmail.com](mailto:jhj20071@gmail.com)
  - **정성우** \- *backend -* [Poongdeong](https://github.com/jsw3788)
    - [jsw3788@naver.com](mailto:jsw3788@naver.com)
