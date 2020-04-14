const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

document.getElementById("button").onclick = function() {
  // 最初の日を取得
  const startDate = new Date(year.value, month.value - 1, 1);
  // 最後の日を取得
  const endDate = new Date(year.value, month.value, 0);
  // 月の最終日を取得
  const endDay = endDate.getDate();
  // 月初の曜日を取得
  const startYoubi = startDate.getDay();

  let calendarTitle = "";

  let calendarHtml = "";
  if (year.value != "" || month.value != "" || day.value != "") {
    calendarTitle = `<div>${year.value}/${month.value}/${day.value}</div>`;
  }
  let count = 1;
  for (let i = 0; i < 6; i++) {
    calendarHtml += `<tr class="calendar${i}">`;
    for (let j = 0; j < 7; j++) {
      if (j < startYoubi && i == 0) {
        calendarHtml += `<td></td>`;
      } else if (j >= startYoubi && j < 7 && i == 0) {
        if (day.value == count) {
          calendarHtml += `<td id="day-${count}" class="active">${count}</td>`;
          count++;
        } else {
          calendarHtml += `<td id="day-${count}">${count}</td>`;
          count++;
        }
        continue;
      }

      if (i != 0 && endDay >= count) {
        if (day.value == count) {
          calendarHtml += `<td id="day-${count}" class="active">${count}</td>`;
          count++;
        } else {
          calendarHtml += `<td id="day-${count}">${count}</td>`;
          count++;
        }
      } else if (i != 0 && endDay < count && j <= 6) {
        calendarHtml += `<td></td>`;
      }
    }
    calendarHtml += "</tr>";
  }

  // tableの終了タグのすぐ上に<tr>追加
  const calendar = document.getElementById("calendar");
  calendar.insertAdjacentHTML("beforeend", calendarHtml);

  // tableの開始タグのすぐ上にcalendarTitleを追加
  calendar.insertAdjacentHTML("beforebegin", calendarTitle);
};
