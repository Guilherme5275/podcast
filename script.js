// Função para o botão "Curtir"
document.getElementById("likeButton").addEventListener("click", function() {
    var likeCount = document.getElementById("likeCount");
    var currentLikes = parseInt(likeCount.innerText);
    currentLikes++;
    likeCount.innerText = currentLikes + " Curtidas";
});
