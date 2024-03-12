$(document).ready(function() {	

	$("#myonoffswitch1").change(function() {
		if(this.checked) {
			$('.location-gps-wrapper').addClass('geo-location-active');
		} else {
			$('.location-gps-wrapper').removeClass('geo-location-active');
		}
	});

	function progressBar(percent, $element) {
		var progressBarWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBar(20, $('#progressBar'));
		
	var select = $( "#gold-amount-wrapper" );
	var slider = $( "<div id='slider-gold'></div>" ).insertAfter( select ).slider({
		min: 1000,
		max: 10000,
		value: 1000,
		range: "min",
		change: function(event, ui) { 
			var sliderValue = $( "#slider-gold" ).slider( "option", "value" );				
			$('#gold-amount').html(sliderValue);
			if(sliderValue == '1000') {
				progressBar(20, $('#progressBar'));
				$('#decrease-gold').addClass('btn-disabled');
				$('.max-amount-coins').fadeOut();
			}
			else if (sliderValue == '4000') {
				progressBar(40, $('#progressBar'));
				$('#decrease-gold').removeClass('btn-disabled');
			}
			else if (sliderValue == '6000') {
				progressBar(60, $('#progressBar'));
			}
			else if (sliderValue == '8000') {
				progressBar(80, $('#progressBar'));
				$('#increase-gold').removeClass('btn-disabled');
				$('.max-amount-coins').fadeOut();
			}
			else if (sliderValue == '10000') {
				progressBar(100, $('#progressBar'));
				$('#increase-gold').addClass('btn-disabled');
				$('.max-amount-coins').fadeIn();
			}
		}        
	});	
	
	$('#increase-gold').click(function() {
	var sliderCurrentValue = $( "#slider-gold" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue + 1000 );
	});

	$('#decrease-gold').click(function() {
	var sliderCurrentValue = $( "#slider-gold" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue - 1000 );
	});

	function progressBarGems(percent, $element) {
		var progressBarGemsWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarGemsWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarGems(20, $('#progressBarGems'));
	var selectGems = $( "#gems-amount-wrapper" );
	var sliderGems = $( "<div id='slider-gems'></div>" ).insertAfter( selectGems ).slider({
		min: 1000,
		max: 10000,
		value: 1000,
		range: "min",
		change: function(event, ui) { 
				var sliderValueGems = $( "#slider-gems" ).slider( "option", "value" );
				$('#gems-amount').html(sliderValueGems);
					if(sliderValueGems == '1000') {
						progressBarGems(20, $('#progressBarGems'));
						$('#decrease-gems').addClass('btn-disabled');
						$('.max-amount-points').fadeOut();
					}
					else if (sliderValueGems == '4000') {
						progressBarGems(40, $('#progressBarGems'));
						$('#decrease-gems').removeClass('btn-disabled');
					}
					else if (sliderValueGems == '6000') {
						progressBarGems(60, $('#progressBarGems'));
					}
					else if (sliderValueGems == '8000') {
						progressBarGems(80, $('#progressBarGems'));
						$('#increase-gems').removeClass('btn-disabled');
						$('.max-amount-points').fadeOut();
					}
					else if (sliderValueGems == '10000') {
						progressBarGems(100, $('#progressBarGems'));
						$('#increase-gems').addClass('btn-disabled');
						$('.max-amount-points').fadeIn();
					}
				}        
	});				

	$('#increase-gems').click(function() {
		var sliderCurrentGemsValue = $( "#slider-gems" ).slider( "option", "value" );
		sliderGems.slider( "value", sliderCurrentGemsValue + 1000 );
	});

	$('#decrease-gems').click(function() {
		var sliderCurrentGemsValue = $( "#slider-gems" ).slider( "option", "value" );
		sliderGems.slider( "value", sliderCurrentGemsValue - 1000 );
	});
	
	$('#first-step-button').click(function () {
		$('#instructions-completion-indicator-step-1').addClass('step-done').html( "<i class='fa fa-check-circle' aria-hidden='true'></i>" );
		$('#account-information-wrapper').fadeIn(250);
		$('#close-account-information-wrapper').click(function () {
			$('#account-information-wrapper').fadeOut(100);
			$('#instructions-completion-indicator-step-1').removeClass('step-done').html( "<i class='fa fa-times-circle' aria-hidden='true'></i>" );
		});
	});
	
	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarConsole(1, $('#progressBarConsole'));	

	function loading_step() {
		$('#account-information-wrapper').fadeOut(50);
		$('#resources-select-wrapper').fadeOut(500, function() {
			$('#processing-wrapper').fadeIn(500, function() {
				var $console_message_username_msg = $('#account-username').val();
				var $console_message_platform_msg = $('#account-platform').val();
				var $console_message_gold_msg = $('#slider-gold').slider("option", "value");
				var $console_message_gems_msg = $('#slider-gems').slider("option", "value");			
				var $console_message = $('.console-message');
				if ($(window).width() < 600) {
					window.scrollTo(0, $("#processing-wrapper").offset().top);
				}	
				setTimeout(function() {
					$('.starting-loading-wrapper').fadeIn();
					$console_message.text('Dosyalar bulunuyor...');	
					progressBarConsole(3, $('#progressBarConsole'));			
				}, 0 );
				setTimeout(function() { 
					$console_message.text('Dosyalar yükleniyor...');	
					progressBarConsole(15, $('#progressBarConsole'));			
				}, 1000 );
				setTimeout(function() { 
					$console_message.text('Veritabanı araması başlatılıyor...');	
					progressBarConsole(18, $('#progressBarConsole'));			
				}, 1800 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_username_msg + " veritabanında aranıyor...</span>");	
					progressBarConsole(22, $('#progressBarConsole'));			
				}, 3000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_username_msg + " bulunuyor.</span> Platform: <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span>");	
					$('.starting-loading-wrapper').fadeOut(500, function() {
						$('.console-username-wrapper').fadeIn();
						$('.console-platform-wrapper').fadeIn(500);
					});		
					progressBarConsole(26, $('#progressBarConsole'));			
				}, 5000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_username_msg + " kaynakları gözden geçiriliyor.</span>");
					$('#console-username-value').text($('#account-username').val());
					$('#console-platform-value').text($('#account-platform').val());
					$('#console-success-confirmation-username').fadeIn();
					$('#console-success-confirmation-platform').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});					
					progressBarConsole(30, $('#progressBarConsole'));			
				}, 8000 );
				setTimeout(function() { 
					$console_message.html("Kaynaklar üretiliyor.");	
					progressBarConsole(35, $('#progressBarConsole'));			
				}, 10000 );
				setTimeout(function() { 
					$console_message.html("Elmaslar üretiliyor.");	
					progressBarConsole(38, $('#progressBarConsole'));			
				}, 11000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_gold_msg + "</span> Elmas üretimine başlandı.");
					$('.console-gold-wrapper').fadeIn(500, function() {
						var $console_gold_countto = $('#slider-gold').slider("option", "value");
						$('#console-gold-value').countTo({
							from: 0,
							to: $console_gold_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							  return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(42, $('#progressBarConsole'));			
				}, 12500 );
				setTimeout(function() {
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_gold_msg + "</span> <span class='console-message-success'> Elmas başarıyla üretildi.</span>");
					$('#console-success-confirmation-gold').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(55, $('#progressBarConsole'));			
				}, 16000 );
				setTimeout(function() { 
					$console_message.html("Altınlar üretiliyor.");	
					progressBarConsole(58, $('#progressBarConsole'));			
				}, 18000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_gems_msg + "</span> Altın üretimine başlandı.");
					$('.console-gems-wrapper').fadeIn(500, function() {
						var $console_gems_countto = $('#slider-gems').slider("option", "value");					
						$('#console-gems-value').countTo({
							from: 0,
							to: $console_gems_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							  return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(62, $('#progressBarConsole'));			
				}, 19500 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_gems_msg + "</span> <span class='console-message-success'>  Altın başarıyla üretildi.</span>");
					$('#console-success-confirmation-gems').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(74, $('#progressBarConsole'));			
				}, 23000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-success'>Kaynaklar başarıyla üretildi</span>");	
					progressBarConsole(80, $('#progressBarConsole'));			
				}, 24900 );
				setTimeout(function() { 
					$console_message.html("Oluşturulan paketler optimize ediliyor");	
					progressBarConsole(84, $('#progressBarConsole'));			
				}, 25900 );
				setTimeout(function() { 
					$console_message.html("Veritabanı izleri siliniyor");	
					progressBarConsole(90, $('#progressBarConsole'));			
				}, 27000 );
				setTimeout(function() { 
					$console_message.html("Doğrulama adımları kontrol ediliyor");	
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 28000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-error'>Doğrulama adımları tamamlanmamış</span>");	
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 30000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>Lütfen doğrulama adımlarını tamamlayın</span>");
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 32500 );
				setTimeout(function() {
					$('#human-verification').fadeIn();
					$console_message.html("Doğrulama adımlarının tamamlanması bekleniyor...");
					$('#instructions-completion-indicator-step-3').addClass('step-pending').html( "<i class='fa fa-repeat fa-spin' aria-hidden='true'></i>" );
					if ($(window).width() < 600) {
						window.scrollTo(0, $("#human-verification").offset().top);
					}					
				}, 33500 );
			});
		});       	
    }
	
	$('#second-step-button').click(function() {
		if ($('#account-username').val() != '') {
			$('#instructions-completion-indicator-step-2').addClass('step-done').html( "<i class='fa fa-check-circle' aria-hidden='true'></i>" );
			loading_step()
		}
		else {
			swal("Error", "Lütfen boş alan bırakma.", "error");
		}
	});
	
	$('#linklocker-human-verification-button').click(function() {
		$('.offers-wrapper-direct').fadeIn();
		$('.og-human-verification-button-wrapper').fadeOut();
	});
	
    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
	
	$('.f-s').fancySelect();
	
});


var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["turtalı", "karadenizli", "hadsiz", "tüpnükpiki", "fıkretcısımıt", "alarkokombi", "ugurderindondurucu", "hokeycımurat", "tüysüzahmet", "uçansabri", "güzelyazısalih", "kasapcıselcan", "katılkedi11", "azmanyacanavarı", "şokbıçaklıekrem", "roguosurdu", "sütlünurıye", "bavuldızlayan91", "kutahyaporselen", "zirveönemli", "kırıkbardaktansuıcme01", "sihirdarvadısınehg", "kırmızıguclendırmesal", "açalfayabankurt", "kablosuztelefon", "bursalıneco01", "katılbalina", "cereninselamıvar", "cumayagelkafirolma", "kördegilim21", "ultimgeldikaç", "çaykurrizespor", "yardımagel", "benitakipet11", "petşişe32", "lolipop12", "sarıveyapembeçiçek", "altkoridorbenim", "tünelçıkısı23", "arabasevdası", "karabibik33", "cezmiBEY15", "aylardanekimbenyinetekim", "agustoskarıncası", "domatespuresi", "rüstüdonlarıdüştü", "volkanıkpatlama", "kargomgeldihg", "helyumbalonu44", "kütüksevdası", "muzıkhasılatı", "kelimelerkıfayesiz", "azerbülbülü", "maznumhikayeler", "cicikuş11", "kafestekaldımyardım13", "limonsevmemnanever", "pembeyekafaatan", "acılıurfa", "dürümpatates", "soğanhalkası42", "örümcekkorktunmu", "güzliajanismail", "yüceasaharun", "mezarcırıza", "ismetinonü22", "zureyfaboylu", "hakanhızlı", "ekrankırıldı", "acunılıcalıbey", "seymasubası22", "voleattımgolsaymadılar", "subardağı33", "telefonkılıfı", "oyuncakfigürü", "beskafadar", "ütükablosu", "amcayayervein", "bacaklarımtutmuyor", "ütümasası53", "ütümbozuldu06", "balkonçay3", "kapalıçarşı", "ercankuaför", "baklaavaayran", "@lipilav", "avakadocanavarı", "burgermelih", "adressordurtan33", "simitçay32", "evliyaçelebi", "nazımhikmet", "yagmurdamlası", "uludağınzirvesi", "eriklisu", "aykkabıkeratsı", "nereLeesin", "800kYASUO", "zincirkoparan01", "yemeksepetipromokod", "heykelim", "atlasokyanusu", "rumeliakhisarı42", "Bilgisayar dahisi", "p0z", "Pozver", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "goldenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "adsız14", "sniperci", "iLucent", "fantastik", "kasap", "tütüncü", "fakirlo", "bmwciali", "KafacıKral", "Gucigenk", "Javitttt", "Hileyiyaptim", "hilecalisiyor", "Elmasci", "Hileciazman", "Karlı", "Ali", "Ahmetsamet", "cesurxx", "KRall43", "tombul", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "Atatürk", "scarra", "HUYAGorilIA", "Hileprosu", "VATAN54", "hilecifarem", "Cennet", "YY90001PiKaChu", "CEHENENM", "Ahmet Yasin", "Tuğçe Kaynar", "Selin Şekerci", "Nagihan Yılmaz", "Ahmet Selim", "ccCmhpCcc", "Orhan Akman", "Selman", "TAhir", "Emre Görek", "Stancıİbrahim", "Wos wos ibo", "Ayşe Pakp", "xPecake", "tencere", "kingon", "KingCobra", "Çorbacı Necmi", "TSMLustboy", "C10Meteos", "Fark var", "takar geçer", "oluyor mu", "çalıştı", "m2sticc", "CCCaliCCC", "LONCA", "CaseOpened", "OSMANLI", "amanda aman", "girl", "Kapitalizm22", "konyali234", "bobqinXD", "Bobinci", "Sude Korkmaz", "Ceren", "Diablo", "Massakacı", "ABoneyim", "tatlıses", "Talip", "Zehra", "Kırık", "BUYUKEL", "UZAYLI", "Dökük", "yıkık", "LOLCU", "CSTCris", "YASASINPUBG", "DİSKO4", "Diskocu", "partici", "kralşakir", "matadorismail", "ponpon", "RECEP", "Samet", "kRAL", "RoA", "Bigbogss", "PATRON", "Şahin", "Şahinci", "Mahmut Keleş", "Ayşe Kulin", "Cansuay", "Kürşad", "imp", "Amip", "Perüze", "Ünal Turan", "Roşen", "gÜLMİRAY", "Ayda Kutay", "Begonya", "Fatma Güzel", "Zeynep", "AYŞE", "Messi55", "olduu", "lilipar", "Seyran", "Tanju Koçer", "Zekiye Tamir", "Ahmet Emre", "Okan Büdün", "Defne Altuna", "Halim Şahbazoğlu", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "Gökmen Elçi", "Hilmi Gökler", "Erdem Can", "Birgün Babuş", "Atakan OktarA", "ADNAN HOCA", "Bayındır", "Göçebe", "900k Yasuo", "lolcü", "WakaWaka", "gaziosmanpaşalı", "bütünleme", "görkem", "salamur", "sushi yiyen", "aga", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "OFF", "Beliz", "Yahya Sama", "Necla Gülbahar", "Mete Menteşe", "Murat Somon", "Balık", "keşkek", "EZEL", "Su samuru", "Mimar", "Doktor", "Mühendis Bey", "Kral Adam", "Doktor Hanım", "Sude Eş", "Teyfik", "Gülperi Berk", "Ayşen <3", "Miki MOUSE", "Çağdaş", "Serap Akın", "Hasan Can bOran", "CS 1.6cı", "Sertel Özülkü", "Süheyla", "Ali Said", "Said That", "Jackoo", "Saskio", "Peder", "Gustavo", "Drogba", "alex de souza", "Kemerli", "istanbullu", "angaralı", "IMbz", "miqo", "angara bebesi", "HALUK", "TATAR", "tay tay", "Ayr", "ayarcı", "fibonaççi", "GamerXz", "Remie", "BURDABİTER", "on numara kafa", "üleleek", "Fatih Gök", "Betül Taş", "Sertçocuk", "papçi", "papçici", "kafacı", "TrollerDog", "hs", "LiquidInoriTV", "MiniMe", "esra can", "Gülbahar Temiz", "RAMAZAN TEMİZ", "NECLA", "TAYYAR EMMİ", "DGB", "Dur sun", "Sevecen", "diana", "baohando", "shelly", "master yi", "jamee", "yasuo", "vayne", "webtekn", "bensu", "İpek Öztürk", "Meriç", "Bahattin", "Süheyla", "Corc buş", "Ali Said", "Narin Tuğyan", "Reşat Evik", "Erdal Atıcı", "Derman", "Dertli", "Görkem", "Gökşen", "Göksel", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "hileUstası", "F1Flow", "Kazahana", "Malajukii", "sutlac", "JoshMabrey", "tehlikeli10", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "Necmi Uyanık", "İsmail Güler", "Kerim Güler", "Muhammed", "Sedat Uçkun", "Ramanazan", "Oğuzhan", "İbrahimm", "LEYLA", "PElin", "GalipYaşar", "TummyTuck", "Duffy Bak", "Lucifer", "İrem Kalaycı", "Yasir", "Zwag", "Kurtsken", "Badi buldink", "HACI ABİ", "ŞeytanİBo", "KasklıBoy", "İmanpower44", "Kelebek", "Tarkan", "Kür samet", "fıs fıs ibo", "bon bon ismail", "IREGlNALD"];
var ChatContent = ["Ne kadar elmas alabilirim?", "bunu deneyen varmı?", "çalışıyormu lao", "nasıl bu kadar basit olabilir hahaha", "Bu inanılmaz,  işe yarayacağını düşünmemiştim", "14k yaptım tekrar yapıcam", "allah razı olsn.", "doğrulama içinbiri yardım edebilirmi", "VAYAMK!", "anaskm oldu lan", "tiktok takipçi hilesini yaptım şu an çalıştı ", "instagram takipçi hilesini yaptım takipçi akıyor lan", "çalışıyor mu diye sormayın arkadaşlar çalışıyor net bilgi", "susun söylemeyin kimseye de açığı kapatmasınlar", "olum şaka maka bir sürü elmas aldım", "bedava bir sürü uc geldi lan", "arkadaşlar normalde parayla alamyacağımız elması bu site gönderiyor şaka gibi", "abi siz efsanesniz ya", "kralmq", "üstatlar ellerinize sağlık çalışıyor", "mobile legends hile ne zamnan gelir?", "dört gözle bekliyorum elmasları derken geldi lan", "altınlar hesabıma yüklendi", "Tiktok takipçiler geldiiiii", "instagram takipçim 100bin olduu lannn", "instagram beğeni hilesi çalışıyor", "tiktok beğeni hilesi çalışıyor", "Tiktok izlenme hilesi çalışıyor arkadşlr yaptm", "Tiktok jeton hilesiiyle kız tavluyorum şu an", "İnstagramda beğeniler uçuyor", "Youtube abone hilesi de gelsin", "abi clash of clans hile gelir mi", "instagram izlenem hilesi gelsin", "o hileler var zaten kardeşim", "sitenin anasayfasına bakarsan o hilelerin zaten paylaşıldığını görürsün", "lan anasayfaya gidin o hileler orda var", "yapamayan salaklara yardım edilirxd", "bedava gerçekten ya ", "sms doğrulaması yapıyor muyuz", "yaptım geçtim valla geldi", "hile gerçekten güncel çalışıyor", "free fire'da 10000 elmas gönderdim", "Free fire elmaslarım geldi", "Brawl stars 10000 elmasım geldii bee", "brawl stars hilesi çalışıyor 9000 elmas gönderdi", "elmaslar hesabıma geldi arkadaşlar", "altınlar hesabıma geldi beyler", "benim de takipçiler hesabıma geldi arkadaşlllarr", "hayırlı olsun brolar", "güle güle kullanın arkdşlar", "olum şaka gib ya ", "çalışıyor olm işte ne şakası",  "LOL!", "ROFL!", "Real", "vayy", "kolaydı", "bro", "selamın aleyküm", "hile yayılmaz inş", "selam arkaaşlar", "şu ana kadar ne kadar ganimet kastınız", "doğrulama ne", "bu ücretsizmi", "ne kadar beklemek zorudasın", "Yea", "hayır", "biliyorum", "vay amk süpermiş lan", "uhm", "belkı", "hiçbirşeyi beklemiyorum", "Is this for real guys?", "Hile için sağol dost", "Cool =)", "<message deleted>", "aman allahım", "siktir", "sevdimm", "bu kadar kolay alacağını tahmin etmemiştim", "bunu forumlarda oldukça etkileyici gördüm", "spam yapmayın amk çomarları", "Oyun oynamak isteyen var mı?", "hile iyiymiş la hakketten", "bunun bana çok para kazandırdığından eminim", "agalar bi 2k kaptm alırım h.o", "hileyi bulduğum için çok mutluyumm", "elmas kaç tane gelyor?", "siteyi iyiki keşfettim amk iyi denk geldi", " heh şimdi oldu", "googleplay kodum nerde?", "bir arkadaşım bana bundan bahsetti", "spam yapmayn lan", "pin kodu nerde", "doğrulamayı yaptm ganimetler direk geldi la", "hile beleşmi", "bye", "doğrulamyı yaptım teşekkürler", "ne kadar alabiliriz günlük?", "inanılmaz", "10 dk", "şimdi gitmem lazım", "brb", "tekrar denemelisin", "burada olmaktan pişman olma", "hassiktir çalışıyor", "amnskm çalıştı +", "çocuklar çok kolayyy, 2dk bile sürmedi!", "Biri benim için yapabilir mi? Kullanıcı adım brezilya pidgey", "PM me pls", "nooblar", "niantic pls", "bugün şanslı günüm", "Bu en iyi savas puani kasma web sitesi çünkü hepimizin bir şansı var", "bence buradaki herkesin Savaş Puanı var", "sağolasın", "bp mi?", "Savaş Puanlarının süresi dolar mı?", "Hileyi kız arkadaşım için yaptım :D", "site hızlı", "doğrulamada para alacak sandm amk götüm tutşştu piç admin. ama almadı sağol :D. hem sevdim hem dövdüm ama olsun", "selam. 2 kere hileyi kullanabilirmym", "eyvalalh kanka", "calıstı sagolasın bro", "sms doğrulamasını yaptm beklıyorum", "hergün yapıyorm amk hilesini hahaha", "allah razı olsn", "teşekkürlerr", "sağol kardeş", "bravo o", "hile iyi çalışıyor he", "çok teşekkürler++", "umarım çalışır", "hilede emeği geçen herkese teşekkürler", "hilede emeği geçen herkese bende teşekkür ederim", "admine selamlar", "hadi oynayak?", "bunu bekleyen tüm insanları hayal et", "hile bozulmasın hep çalışsın sağol", "effsaneee", "bu twitch chati mi?", "vayy birsürü insan var", "selam benim yerime yapsanıza la", "eyvallllahh", "en yenisi", "selam naber arkadş", "adanadan selam", "profilime bakın. zengin oldum :p", "allahuekberr", "ankaradan selam", "mersinden selamlar", "edirneden selam arkadaşlar", "harikaaa", "oh be", "Doğrulamadan para almıyor arkadaşlar", "<3", "OHA ÇALIŞTIII!!! YUPPİ", "silivriden selamlar", "değerli", "vayy", "limitsizmi?", "hangi şehirdensiniz", "hile çalışıyoormu", "ÖNLERDEN REZZZ", "para almıyormu", "Bunu daha önce görmedim ama sonuçtan etkilendim im!", "erkek arkadaşım ucube olacak: D", "iyiymiş ", "sa", "allah çarpsın çalıştı ve para almadı", "harbi çalıştı la", "aman aman nereye geldik  ", "bokunu cıkarmayın hılenın :d", "tşk", "sms doğrulamasından para alcak sandım ama iyi almadı la :d", "ARKADAŞLAR PANİKLEMEYİN PARA ALMIYOR, TECRÜBEYE SABİT!", "trollemeyin", "ofofof", "biri yardım etsn", "50k yaptm isteyene ss atarm", "bende 20k yaptm isteyene ss atılır", "hile harbi çalışıyor lanğnnğnğ", "trolololooooo", "en iyisi", "bence", "herşeymi ücretsizz", "güvenilir", "ekşiden selamlar", "AMAN AMAN NEREYE GELDİK", "çok basit la hile", "taşşağına sağlk", "telefonu kybettim ya :(", "ne?", "yes i got it too", "spamlamayın laa", "nooblar hileyi yapamıyor", "ÇALIŞTIIIIII", "hacker oldum hahaha", "emre burdamısın?", "Allah çarpsın oluyor", "sağol", "hile legalmi", "çalıştı mı?", "aynen çalıştı", "Bunu üç kez kullandım ve cukkaladım elması altını", "çoğu insanın olumlu şeyler yazdığını görüyorum, bu doğru mu", "SMS DOĞRULAMASINDA PARA ALINACAKTIR DİYOR AMA ALMIYOR. İLGİNÇ HİLE ÇALIŞTI", "mikemmel", "agalar çalışıyormuuu", " İLK KEZ BBİ HİLE ÇALIŞTI ŞÜKÜR YARAB", "BEYLER PARA ALIR DİYOR AMA ALMIYOR HİLE ÇALIŞTI İSTEYENE SKYPE DEN SS ATILIR.", "ÇOK UĞRAŞTIM AMA DEĞDİ", "thank you!", "TEŞKKÜRLER ABİİİMM", "çalıştı herkese hava atıcam hahaha", "BIRAKIN PARAYI SMS ÜCRETİ BİLE ALMADI HİLE ÇALIİIYR", "aasdasdasd", "dasdD:ASDASFdsfds", "sms doğruması korkuttu ama çalıştı", "hadi bismillah", "cünübüm ama çalıştı amk :D", "mdsfmdsgmfdgmdfgmd", "piyasadaki tek çalışan site lan diğerleri çalışmamıştı", "sms doğrulaması zorladı ama başardım ve oldu ", "Calısıyormu lan", "nasıl calısıyor", "hile çalışıyormu", "bi 3k yaptm helal et admin", "hile güncelmidir", "hile nasıl çalışıyormu acil cevapp", "agalar çalışıyormuu biri yazsn", "şimdi siktim", "hile iyimi nasıl", "dsadsfdsfds", "yapamadım dsfjdgfdj", "yapamayan varmı yapaymm", "...^^", "hassiktir lan çalıştı bu", "5K elmas İÇİN BURDAYM :D", "SMS DOĞRULAMASINDAN PARA ALMIYOR . TECRÜBEYE SABİT+", "sağol reis", "tşkk.", "vayy be daha neler", "okay", "hile çalışıyormu", "Hile çalışmazsa çok üzülürdüm.. Amaa çalıştıı", "tşk", "sağol panpa çalıştı", "HİLE ÇALIŞIYOR", "10.000 elmas!!", "vayy", "agalar hile çalışıyor", "teşekkürler türkiye", "eyvallah başkan", "para alacak sandım ama ücretsiz+"];
var ChatAntiBot = ["Fuck you I'm not a bot", "Does this sound like a bot to you noob?", "yeah we're all bots Kappa", "bot? i'm here for spamming this shit lol", "are you stupid or something? they have anti bot protection", "sure bot, 0101010110 lmao xD", "no, we're not bots Kappa"];


$(document).ready(function() {


    ChatStart();
    ChatLog("Sohbet odasına hoş geldiniz, bağlantı gönderir veya spam yaparsanız chatte banlanırsınız.");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#livechatInputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#livechatButtonChat')['click']();
        };
    });
    $('#livechatButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#livechatContainerChatUserName')['fadeIn'](250);
            $('.livechatOverlaySmall').fadeIn(200);
        } else {
            $msg = $('#livechatInputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#livechatInputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  Lol Stop spam and just use the Toon Blast generator');

                    setTimeout(function() {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  Are you here for the first time? This is the only legit Unknown Cash generator');
                        setTimeout(function() {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'jungs, hören sie nicht zu ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' He only wants all the Unknown Cash for himself haha');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#livechatButtonChatUserName')['click'](function() {
        ChatUserName = $('#livechatInputChatUserName')['val']();
        $('#livechatContainerChatUserName')['fadeOut'](250, function() {
            $('.livechatOverlaySmall').fadeOut(200, function() {
                $('#livechatButtonChat')['click']();
            });
        });
    });


});



Date.prototype.getFullMinutes = function() {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function() {

    $('#livechatInputComment').focus(function() {
        $('#livechatContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function() {
        setTimeout(function() {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            ChatAddEntry(_0xaa63x9, _0xaa63xa);
            _0xaa63x8();
        }, Random(1000, 15000));
    };
    _0xaa63x8();
};
