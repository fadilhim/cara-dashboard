# Google Sheets feedback endpoint

The feedback page posts to `VITE_FEEDBACK_ENDPOINT`. Use a Google Apps Script web app URL for that value.

```js
function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Feedback')
  const data = JSON.parse(e.postData.contents)

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.message,
    data.createdAt,
  ])

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON)
}
```

Deploy the script as a web app with access set to anyone with the link, then set `VITE_FEEDBACK_ENDPOINT` to the deployment URL.
