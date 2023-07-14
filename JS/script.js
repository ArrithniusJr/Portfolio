document.addEventListener("DOMContentLoaded", function() {
  const socialMContainer = document.getElementById("social-m");

  const socialMContent = `
    <div class="links">
      <a href="https://www.facebook.com/arrithniuskhuliso/">
        <img src="IMAGES/fbh.png" alt="facebook"/>
      </a>
    </div>
    <div class="links">
      <a href="mailto:arrithnius@gmail.com?subject=Feedback">
        <img src="IMAGES/email.png" alt="facebook"/>
      </a>
    </div>
    <div class="links">
      <a href="https://wa.me/+27677343682/">
        <img src="IMAGES/whatsapp.png" alt="facebook"/>
      </a>
    </div>
    <div class="links">
      <a href="https://www.arrithnius.github.io">
        <img src="IMAGES/github.png" alt="github"/>
      </a>
    </div>
    <div class="links">
      <a href="">
        <img src="IMAGES/Ll.png" alt="linkedln"/>
      </a>
    </div>
  `;

  // Apply the content to section1
  const socialMContainerSection1 = document.getElementById("social-m-section1");
  socialMContainerSection1.innerHTML = socialMContent;

  // Apply the content to section2
  const socialMContainerSection2 = document.getElementById("social-m-section2");
  socialMContainerSection2.innerHTML = socialMContent;
});
