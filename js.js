	var header = document.getElementById("bar-active");
    var btns = header.getElementsByClassName("items-bar");	    for (var i = 0; i < btns.length; i++) {
	    btns[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	    });
	}

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      var container = document.querySelector('.container');
      var isDragging = false;
      var startX, scrollLeft;
  
      container.addEventListener('mouseenter', () => {
        container.classList.add('active');
      });
  
      container.addEventListener('mouseleave', () => {
        container.classList.remove('active');
      });
  
      function startDragging(e) {
        isDragging = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      }
  
      function stopDragging(e) {
        isDragging = false;
      }
  
      function dragScroll(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 3; // scroll speed
        container.scrollLeft = scrollLeft - walk;
      }


    //   scroll
    