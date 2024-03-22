var paragraphContents = {
  jpEN1:
    "Vietnamese Iced Coffee or Vietnamese Iced Milk Coffee is a traditional and iconic beverage of Vietnam. It is created by using roasted coffee, passing hot water through the Vietnamese coffee filter, combined with sweet condensed milk and a few ice cubes. There are various types of coffee used in Vietnamese coffee making, but the most commonly used is Robusta coffee, which is a favorite of the Vietnamese people and also widely grown in Vietnam. The distinct flavor of Vietnamese Iced Coffee comes from the harmonious blend of the coffee's bitterness, aroma, and the rich sweetness of condensed milk, creating a truly unique and unforgettable experience. Vietnamese Iced Coffee is often enjoyed in the morning or when you need to be of sound mind.  It is not only a beverage but also an essential part of Vietnam's rich coffee culture. You can find Vietnamese Iced Coffee served at coffee shops, street food stalls, and restaurants all over Vietnam. Don't miss the opportunity to savor the special flavor of Vietnamese Iced Coffee when you visit Vietnam!",
  jpEN2:
    "Vietnamese Iced Tea is a popular and refreshing beverage enjoyed throughout Vietnam. This is a cold version of tea, prepared and served with ice. Iced tea typically has a refreshing, delicious, and thirst-quenching taste, making it a great choice on hot days. Iced tea has various variations and different brewing methods. One of the most popular types of iced tea is traditional iced tea, made from fresh tea leaves and hot water, or made using a special type of tea called [black tea] or [lotus leaf tea], then cooled and served with ice and sugar. People can also add lemon, peach, grapefruit, or other fruits to enhance the flavor and add more colors to the iced tea. Iced tea is an essential part of Vietnamese culture and cuisine. You can find iced tea being served from street food stalls to cafes and restaurants throughout Vietnam.",
  jpEN3: "gfh",
};

var originalContents = {}; // Mảng lưu trữ nội dung ban đầu của từng thẻ p

// Lưu trữ nội dung ban đầu của từng thẻ p
for (var key in paragraphContents) {
  originalContents[key] = document.getElementById(key).innerHTML;
}

function changeJPEN(pIndex) {
  const targetParagraph = document.getElementById(`jpEN${pIndex}`);

  if (targetParagraph) {
    if (targetParagraph.innerHTML === paragraphContents[`jpEN${pIndex}`]) {
      targetParagraph.innerHTML = originalContents[`jpEN${pIndex}`];
      targetParagraph.classList.remove("English-text");
    } else {
      targetParagraph.innerHTML = paragraphContents[`jpEN${pIndex}`];
      targetParagraph.classList.add("English-text");
    }
  }
}

// am thanh

function toggleParagraph(index) {
  var paragraph = document.getElementById("p" + index);
  var audio = document.getElementById("audio" + index);

  if (paragraph.classList.contains("active")) {
    paragraph.classList.remove("active");
    paragraph.style.transform = "none";
    paragraph.classList.remove("highlight");
    audio.pause();
    audio.currentTime = 0;
  } else {
    paragraph.classList.add("active");
    paragraph.style.transform = "translateY(-5px)";
    paragraph.classList.add("highlight");
    audio.play();
  }
}

// JavaScript
function playVideo(videoId) {
  var video = document.getElementById(videoId);

  if (video) {
    video.load();
    video.play();
  }
}
