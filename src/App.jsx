/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Head from "./components/Head/Head";
import logo from "./assets/zx.png";
import Marque from "./components/Marque/Marque";
const App = () => {
  const Tahun = new Date();

  return (
    <Head title={"Exsploits"}>
      <section className="zhaenx" id="zhaenx">
        <div className="backdrop"></div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-3 d-flex justify-content-center align-items-center pt-3 noSelect">
              <div className="cardImg">
                <img
                  src={logo}
                  width={"100%"}
                  className="img-fluid"
                  loading={"lazy"}
                  alt="zhaenx"
                />
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center align-items-center pt-2 px-1 noSelect">
              <h1>
                &quot; Hello sir, <span>How are you today...? &quot;</span>
              </h1>
            </div>

            {/* Mesaage */}
            <div className="col-lg-12 d-flex justify-content-center align-items-center px-2">
              <div className="card BoxMessage">
                <p className="textMessage" id="P1">
                  Miris sekali melihat negara ini yang selalu menjadi bahan
                  olok-olok para peretas. Ironisnya, pemerintah tidak sadar
                  sistem mereka sering menjadi tempat praktik bagi para peretas
                  yang baru belajar. Itu pun jika si hacker memiliki etika baik
                  dan bertanggung jawab melaporkan vulnerability tersebut.
                  Bagaimana jika sebaliknya? Tentu sangat merugikan pihak
                  terkait. Namun, percuma. Sekali lagi saya katakan,
                  &quot;PERCUMA&quot; bagi para ethical hacker untuk melaporkan
                  vulnerability tersebut. Mengapa? Karena kurangnya respons(no
                  security awareness), bahkan tidak ada respons sama sekali dari
                  pihak yang terkait dengan keamanan siber (CSIRT).
                </p>
                <p className="textMessage" id="P2">
                  Padahal mereka para ethical hacker mulia sekali secara tidak
                  langsung, mereka membantu sistem Pemerintah Indonesia bisa
                  menjadi lebih baik dengan secara CUMA-CUMA. Bahkan, mereka
                  juga sadar tidak akan ada imbalan uang, Namun mereka diberikan
                  apresiasi berupa ucapan &quot;TERIMAKASIH&quot; atau
                  sertifikat penghargaan. Menurut pandangan saya, itu sangat
                  tidak berguna dan tidak bermanfaat, Hehehe..!! Mengapa
                  demikian? Yaaa, Karena tidak kenyang untuk isi perut, tidak
                  bisa dijadikan uang, tidak bisa untuk kuliah, dan tidak bisa
                  untuk melamar kerja apresiasi tersebut.. Menurut saya
                  apresiasi tersebut hanya sebatas untuk pajangan KEREN-KERENAN
                  Content jedag-jedug di Tiktok. Hehehe..!!
                </p>
              </div>
            </div>

            {/* marrquee */}
            <Marque cls={"Top"} />
            <div className="xxs my-3 noSelect">
              <marquee className="zxAtc">
                z.hex404<span>@gmail.com</span>
              </marquee>
            </div>
            <Marque />

            {/* footer */}
            <div className="col-lg-12 d-flex justify-content-center align-items-center px-1 pb-3 pt-0">
              <div className="card zxSploits noSelect">
                <h2>
                  ZHAENX - <span>EXPLOITS</span>
                </h2>
                <h3>
                  <span>&copy;</span> 2023 - {Tahun.getFullYear()}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Head>
  );
};

export default App;
