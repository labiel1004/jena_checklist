# 의식OS 체크리스트 웹앱

한국어 UI로 만든 간단한 체크리스트 웹앱입니다.  
질문 18개에 `예/아니오`로 답하면 YES 개수에 따라 현재 상태를 3단계로 보여줍니다.

## 실행 방법

### 1. 가장 간단한 방법
`index.html` 파일을 브라우저에서 바로 열면 됩니다.

### 2. PowerShell로 로컬 서버 실행
아래 명령을 실행한 뒤 브라우저에서 `http://localhost:8000`으로 접속하세요.

```powershell
python -m http.server 8000
```

## 파일 구성

- `index.html`: 앱 구조
- `styles.css`: 미니멀 UI와 반응형 스타일
- `script.js`: 질문 흐름과 결과 계산 로직
