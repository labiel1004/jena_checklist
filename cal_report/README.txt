# CAL 꽃카드 템플릿

## 업로드 위치

GitHub 저장소에 아래 구조로 업로드하세요.

```text
/report_cards/
  daisy_card.html
  white_tulip_card.html
  pink_tulip_card.html
  rose_card.html

/images/
  daisy.png
  white_tulip.png
  pink_tulip.png
  rose.png

/report_premium/
  report_sophia.html
```

## 고객별 링크 수정

각 카드 HTML에서 아래 한 줄만 수정하면 됩니다.

```html
<a href="../report_premium/report_sophia.html" class="report-button">
```

예:

```html
<a href="../report_premium/report_parknarae.html" class="report-button">
```

## 고객에게 보내는 링크 예시

```text
https://labiel1004.github.io/jena_checklist/report_cards/daisy_card.html
```

꽃카드가 열리고, 버튼을 누르면 고객 리포트가 열립니다.
