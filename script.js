const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const coáaaBtn = document.querySelector(".coáaa-btn");
const khumBtn = document.querySelector(".khum-btn");

khumBtn.addEventListener("click", () => {
  question.innerHTML = "tàn ác";
  gif.src =
    "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/240661679_1953756891444965_4532064534979585253_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4nOBZND_WZfTQtYPV4XxTL61Xw54yIt4vrVfDnjIi3tNBSaHoEf69gEK4vsqiQWzFD1DOFB5Ok0fRBbS8iD7_&_nc_ohc=_0joCUL-t8oAX9Al46v&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBn4VSAyC_VhFr1eKPG5J6uGuLvz1qTYpEfsYe4qBxQcQ&oe=6606926B";
});

coáaaBtn.addEventListener("mouseover", () => {
  const coáaaBtnRect = coáaaBtn.getBoundingClientRect();
  const maxX = window.innerWidth - coáaaBtnRect.width;
  const maxY = window.innerHeight - coáaaBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  coáaaBtn.style.left = randomX + "px";
  coáaaBtn.style.top = randomY + "px";
});