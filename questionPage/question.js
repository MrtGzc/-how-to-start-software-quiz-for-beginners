const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const question = document.querySelector(".question");
const input = document.querySelector(".range");
const rangeValue = document.querySelector(".rangeValue");
const questionErea = document.querySelector(".questionErea");


btn.addEventListener("click",whenclick);

let soru = 0; 
let sayacWeb = 0
let sayacMobil = 0
let sayacRobotik = 0
let sayacAI = 0


let sorular = [
    // web
    "Görsel işlere vakit ayırmak hoşuma gider ve bu görselliğe önem veririm",
    "En hızlı şekilde para kazanacağım işe girmek ve projelerimi bitirebileceğim  alanda çalışmak benim için önceliklidir",
    "Bolca türkçe kaynağa erişmek benim için önemlidir. Çünkü yabancı dilim pek iyi Sayılmaz",
    "En hızlı öğrenebileceğim alan hangisiyse o alanda ilerlemek motivasyonumu kaybetmememe sebep olur",
    "İnternet sitesi yapmak ve yaptıklarımı arkadaşlarımla paylaşmak beni mutlu eder",
    // mobil
    "İnsanların sürekli kullandığı cihazlar için uygulama geliştiermek hoşuma gider",
    "Yazılım öğrenme sürecimde bolca kaynak bulabileceğim alanda ilerlemek isterim",
    "Yazılım sektörün her zaman ihtiyacı olacağı alanda çalışmak mantıklıdır",
    "APP Store / Play Store dan bir çok uygulama indirir ve onları incelerim",
    "İnsanların günlük hayatı kolaylaştıran projeler geliştirmek hoşuma gider",
    // robotik
    "Elektronik cihazların iç aksanlarını ve onların nasıl çalıştığını merak ederim",
    "İleride milli savunma şirketlerinde mühendis olarak çalışma fikri bana çok güzel geliyor",
    "C/C++ gibi orta seviye yazılım dillerinde kodlama yapmak gayet hoşuma gider",
    "Soyut şeyler değil de somut şeyler ortaya çıkarmak beni her zaman mutlu eder",
    "Yazılımsal işlere ilgim olduğu gibi aynı zamanda donanımsal işlere de ilgim var",
    // yapay zeka
    "Karmaşık verileri bir araya getirip onlardan anlamlı bilgiler çıkarmak tam bana göre iştir",
    "Genelde geleceğe yatırım sayılabilcek alanda kendimi geliştirmek isterim",
    "Yapay zeka teknolojileri ileride ki bir zamanda bir çok yazılımcıyı işsiz bırakıcağına iniyorum",
    "Daha önce yazılım öğrenmek için biraz python videoları izlemiştim. Ayrıca bu dile ilgim var",
    "İş hayatımda Matemetiği kullanmam benim için problem değil ya da hoşuma gider.",
    // mobil ve web
    "Kodlama yaparken yaptığım şeyin hemen karşıma gelmesi benim için önemlidir",
    // robotik ve yapay zeka
    "Karmaşık problemlerle uğraşmak ve bu tür problemleri çözmek beni mutlu eder",
    ]


h1.textContent = `soru ${soru+1}`;
question.textContent = sorular[soru]


function whenclick(){
    soru++;
    rangeValue.textContent = "0%"
    h1.textContent = `soru ${soru+1}`;
    question.textContent = sorular[soru]
    if(soru+1 < 7){
        sayacWeb = sayacWeb + parseInt(input.value)
        question.textContent = sorular[soru]
    }
    else if(soru+1 < 12){
        sayacMobil = sayacMobil + parseInt(input.value)
        question.textContent = sorular[soru]
    }
    else if(soru+1 < 17){
        sayacRobotik = sayacRobotik + parseInt(input.value)
        question.textContent = sorular[soru]
    }
    else if(soru+1 < 22){
        sayacAI = sayacAI + parseInt(input.value)
        question.textContent = sorular[soru]
    }
    else if(soru+1 == 22){
        sayacWeb = sayacWeb + parseInt(input.value);
        sayacMobil = sayacMobil + parseInt(input.value)
    }
    else if(soru+1 == 23){
        sayacAI = sayacAI + parseInt(input.value)
        sayacRobotik = sayacRobotik + parseInt(input.value)
    }
    if(soru+1 > 22){
        h1.textContent = `Testin Sonucu`;
        const max = Math.max(sayacAI,sayacMobil,sayacRobotik,sayacWeb)
        rangeValue.remove();
        btn.remove();
        input.remove();

        const div = document.createElement("div");
        div.className = "tutorials";
        

        questionErea.appendChild(div)

        

        if(max == sayacAI){
            question.textContent = "Yazılım öğrenmeye başlamak için sana en uygun alan Yapay Zeka. Hemen Aşağıda ki kaynaklara tıklayarak Yazılım öğrenmeye başlayabilirsin";
            div.innerHTML = 
        `
        <a href="https://www.udemy.com/course/python-sfrdan-uzmanlga-programlama-1/"><img src="img/Udemy_logo.svg.png"></a>
        <a href="https://app.patika.dev/paths/data-science-for-the-public-good-patikasi"><img src="img/609859a191abe5d64b17fed3_Patika logo.png"></a>
        <a href="https://www.youtube.com/watch?v=u1xmMoH8hjY&list=PLfMRLSpipmfuumcvO3fObVAUpSqYAcZmF"><img src="img/YouTube_Logo_2017.svg.png"></a>
        `
            
        }
        else if(max == sayacMobil){
            question.textContent = "Yazılım öğrenmeye başlamak için sana en uygun alan Mobil Kodlama. Hemen Aşağıda ki kaynaklara tıklayarak Yazılım öğrenmeye başlayabilirsin";
            div.innerHTML = 
        `
        
        <a href="https://www.udemy.com/course/android-o-mobil-uygulama-dersi-kotlin-java/"><img src="img/Udemy_logo.svg.png"></a>
        <a href="https://app.patika.dev/paths/react-native-ile-mobile-app-patikasi"><img src="img/609859a191abe5d64b17fed3_Patika logo.png"></a>
		<a href="https://www.youtube.com/watch?v=5Rem_CKxvF8&list=PLJ5EAGz05Q3FJG96SH8GoWcSUg8IHwtnt"><img src="img/YouTube_Logo_2017.svg.png"></a>
        `
        }
        else if(max == sayacRobotik){
            question.textContent = "Yazılım öğrenmeye başlamak için sana en uygun alan Robotik Kodlama. Hemen Aşağıda ki kaynaklara tıklayarak Yazılım öğrenmeye başlayabilirsin";
            div.innerHTML = 
        `
        <a href="https://www.udemy.com/course/arduinodersleri/"><img src="img/Udemy_logo.svg.png"></a>
        <a href="https://www.udemy.com/course/komple-uygulamal-robotik-kodlama-egitimi-2020/"><img src="img/Udemy_logo.svg.png"></a>
        <a href="https://www.youtube.com/watch?v=yj9l6YL-K-A&list=PLSuhOGv534vS1MNrvdFhBovGIbofssf9r"><img src="img/YouTube_Logo_2017.svg.png"></a>
        `
        }
        else if(max == sayacWeb){
            question.textContent = "Yazılım öğrenmeye başlamak için sana en uygun alan Web Kodlama. Hemen Aşağıda ki kaynaklara tıklayarak Yazılım öğrenmeye başlayabilirsin";   
            div.innerHTML = 
        `
        <a href="https://app.patika.dev/paths/baslangic-seviye-frontend-web-development-patikasi"><img src="img/609859a191abe5d64b17fed3_Patika logo.png"></a>
        <a href="https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu/"><img src="img/Udemy_logo.svg.png"></a>
        <a href="https://www.youtube.com/watch?v=xTbuH8vmi_E&list=PLIHume2cwmHdvlKx7q1HTAar-Hm-4wwgu"><img src="img/YouTube_Logo_2017.svg.png"></a>
        `        
        }
    }

    console.log("web: " + sayacWeb)
    console.log("mobil: " + sayacMobil)
    console.log("Robotik: " + sayacRobotik)
    console.log("Yapay Zeka: " + sayacAI)
    
    input.value = 0;
    
}
