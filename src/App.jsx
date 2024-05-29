import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import FotoVicttoria from './assets/Foto de perfil para redes sociais gradiente simples (10).png';
import Porfile from "./assets/react.svg";
import python from "./assets/python.jpg"
import boot from "./assets/boot.jpg"
import html from "./assets/html.jpg"
import css from "./assets/css.jpg"
import js from "./assets/js.jpg"
import twa from "./assets/twa.jpg"
import next from "./assets/next.jpg"
import projeto1 from "./assets/projeto1.png"
import projeto2 from "./assets/Milk.png"
import projeto3 from "./assets/carrinho.png"
import projeto4 from "./assets/projeto4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLinkedinIn, FaInstagram, FaGithubAlt } from 'react-icons/fa';
import { 
  faReact, 
  faPython, 
  faHtml5, 
  faJs,
  faFigma,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faEarthAmericas, faLanguage, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
 

import React, { useEffect, useState } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  
  const [isFlying, setIsFlying] = useState(false);
  const handleFlyToggle = () => {
        setIsFlying(!isFlying);
    };
    
  const [typedText, setTypedText] = useState('');
  const finalText = ["Hi, I'm Victtoria Correia", "Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

        useEffect(() => {
          const interval = setInterval(() => {
            if (typedText !== finalText[currentTextIndex]) {
              setTypedText((prevText) => prevText + finalText[currentTextIndex][prevText.length]);
            } else {
              clearInterval(interval);
              setCurrentTextIndex((prevIndex) => (prevIndex === finalText.length - 1 ? 0 : prevIndex + 1));
              setTypedText('');
            }
          }, 200); 

          return () => clearInterval(interval);
        }, [typedText, currentTextIndex, finalText]);

        const scrollToSection = (sectionId) => {
          const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: 'smooth' });
        };

        const cursor = document.querySelector(".cursor");
        var timeout;

        document.addEventListener("mousemove", (e) => {
          let x = e.pageX;
          let y = e.pageY;

          cursor.style.top = y + "px";
          cursor.style.left = x + "px";
          cursor.style.display = "block";

          function mouseStopped(){
            cursor.style.display = "none";
          }
          clearTimeout(timeout);
          timeout = setTimeout(mouseStopped, 1000);
        });

        document.addEventListener("mouseout", () =>{
          cursor.style.display = "none";
        })
      
  return (
    <>
    <div className='cursor'></div>
      <header>
        <div className='container m-auto px-4 py-6 '>
          <div className='flex justify-between items-center'>
            <div>
              <img data-aos="fade-right" className="logobrasil w-12 mt-4 ml-72 md:ml-10" src="https://i.imgur.com/FkZKEfo.png" title="source: imgur.com" />
            </div>
            <div className=' whitespace-nowrap max-w-6xl -ml-96 text-black text-3xl font-bold'>
           <h4 data-aos="fade-right" className='nome'>Victtoria Correia</h4>
            </div>
          <div className='nav'  >
              <ul className=' flex gap-10'>
              <li>
                <button data-aos="fade-down" onClick={() => scrollToSection('sobremim')} className='text-purple-600 hover:text-black'>Sobre mim</button>
              </li>
              <li>
                <button data-aos="fade-down" onClick={() => scrollToSection('projetos')} className='text-purple-600 hover:text-black'>Projetos</button>
              </li>
              <li>
                <button data-aos="fade-down" onClick={() => scrollToSection('tecnologias')} className='text-purple-600 hover:text-black'>Habilidades</button>
              </li>
              <li>
                <button data-aos="fade-down" onClick={() => scrollToSection('experiencia')} className='text-purple-600 hover:text-black'>Experiências</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </header>
      
      <main>
        <section>
          
          <div className='dev mt-20 container m-auto px-4 py-10 flex flex-col sm:flex-row gap-5'>
            <div>
            <h1 data-aos="fade-up" className='font-bold text-4xl'>{typedText}</h1>
              <p data-aos="fade-down" className='mt-4 text-1xl'> 
                Sou uma profissional/estudante apaixonada por tecnologia <br />
                e sempre estou em busca de evoluções e aprendizados. <br />
                Tenho conhecimentos e habilidades sólidas em programação e desenvolvimento web, <br />
                assim como sou muito criativa , esforçada e tenho <br />
                espírito de liderança. </p>
                <hr data-aos="fade-up" className='border-t border-purple-600 my-2 mt-16  w-full'></hr>
            </div>
            

            <div className="linguagens grid grid-cols-4 gap-5  " style={{ marginLeft: '60px' }}>
              <img src={Porfile} className="tec move-left w-[60px] sm:w-[100px] " style={{ marginLeft: '80px', marginTop: '10px' }} />
              <img src={python} className=" tec move-left  w-[60px] sm:w-[100px]" style={{ marginLeft: '60px', marginTop: '-40px' }} />
              <img src={boot} className=" tec move-top  w-[60px] sm:w-[100px]" style={{ marginLeft: '30px', marginTop: '0px' }} />
              <img src={html} className=" tec move-left  w-[60px] sm:w-[80px]" style={{ marginLeft: '40px', marginTop: '-30px' }}  />
              <img src={css} className="tec move-top  w-[60px] sm:w-[100px]" style={{ marginLeft: '100px', marginTop: '70px' }}  />
              <img src={js} className=" tec move-right  w-[60px] sm:w-[100px]" style={{ marginLeft: '50px', marginTop: '-10px' }}  />
              <img src={next} className="tec move-right  w-[60px] sm:w-[100px]" style={{ marginLeft: '30px', marginTop: '100px' }} />
              <img src={twa} className="tec move-top  w-[60px] sm:w-[100px]" style={{ marginLeft: '20px', marginTop: '10px' }} />
            </div>

          </div>
        </section>
        <div className='cursor'></div>
        <section id='projetos' className=" mt-48 container m-auto px-4 ">
          <div className="mx-4 justify-center " data-aos="fade-left">
          <div className="col-span-2 text-center">
            <h2 data-aos="fade-up" className='text-3xl font-bold mb-8'>Meus projetos</h2>
            <hr data-aos="fade-up" className='border-t border-purple-600 my-2'></hr>
          </div>
          <div className='grid grid-cols-2 gap-10 mt-11'>
          <div data-aos="fade-right" className='border rounded-md p-5 mt-6  w-200 h-100'>
            <img src={projeto1} alt="" />
            <h3 className='text-lg font-semibold mt-3'>Cadastro/Login</h3>
            <p className='text-gray-600 text-sm mt-5'>Formulário/Login completo , feito inteiramente em inglês , com HTML, CSS e JavaScript. Com validações de campos e totalmente responsivo.</p>
            <div className='flex justify-evenly mt-7 gap-2'>
            <a href="https://victtoriacorreia01.github.io/formulario-login-avan/" target="_blank" rel="noopener noreferrer" className='w-32 h-10 text-center pt-2 bg-gradient-to-t rounded-full from-purple-300 to-purple-600 text-white transition duration-300 ease-in-out hover:from-purple-600 hover:to-purple-800'>Projeto</a>
            <a href="https://github.com/Victtoriacorreia01/formulario-login-avan" target="_blank" rel="noopener noreferrer" className='w-32 h-10 pt-2 text-center border rounded-full transition duration-300 ease-in-out hover:bg-gray-200'>Ver o código</a>
            </div>
          </div>
          <div data-aos="fade-left" className='border rounded-md mt-6 p-5 w-200 h-100'>
            <img src={projeto2} alt="" />
            <h3 className='text-lg font-semibold mt-3' >Formulario Next.js</h3>
            <p className='text-gray-600 text-sm mt-5'>aplicação de estudo em NextJS utilizando como base o layout de captação de lead. com o uso de 
            Vercel, GitHub, Git, Tailwind.
            O foco principal foi criar uma api que envia emails com os dados coletados em nossa LP, criando toda a validação com formik e yup, configurando variável de ambiente e subindo todo o site na vercel. mas logico que com muita criatividade para gerar um otimo visual.
            </p>
            <div className='flex justify-evenly mt-7 gap-2'>
            <a href="" target="_blank" rel="noopener noreferrer" className='w-32 h-10 text-center pt-2 bg-gradient-to-t rounded-full from-purple-300 to-purple-600 text-white transition duration-300 ease-in-out hover:from-purple-600 hover:to-purple-800'>Projeto</a>
            <a href="" target="_blank" rel="noopener noreferrer" className='w-32 h-10  text-center pt-2 border rounded-full transition duration-300 ease-in-out hover:bg-gray-200'>Ver o código</a>
            </div>
          </div>
          <div data-aos="fade-right" className='border rounded-md p-5  w-200 h-100'>
            <img src={projeto3} alt="" />
            <h3 className='text-lg font-semibold mt-3' >Carrinho react</h3>
            <p className='text-gray-600 text-sm mt-5'>Carrinho de compras criado com a poderosa Context API do React, para gerenciar o estado global do aplicativo. Totalmente responsivo e o deploy realizado com Vercel.</p>
             <div className='flex justify-evenly mt-5 gap-2'>
             <a href="https://carrinho-react-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className='w-32 h-10 pt-2 text-center bg-gradient-to-t rounded-full from-purple-300 to-purple-600 text-white transition duration-300 ease-in-out hover:from-purple-600 hover:to-purple-800'>Projeto</a>
            <a href="https://github.com/Victtoriacorreia01/carrinho-react" target="_blank" rel="noopener noreferrer" className='w-32 h-10 pt-2 text-center border rounded-full transition duration-300 ease-in-out hover:bg-gray-200'>Ver o código</a>
            </div>
          </div>
          <div data-aos="fade-left" className='border rounded-md p-5 w-200 h-100'>
            <img src={projeto4} alt="" />
            <h3 className='text-lg font-semibold mt-3'>REKTER</h3>
            <p className='text-gray-600 text-sm mt-5'>Site completo feito com HTML, css e Javascript. Totalmente responsivo.
              Com muita criatividade e aprendizado durante o desenvolvimento!</p>
            <div className='flex justify-evenly mt-7 gap-2 text-center '>
            <a href="https://victtoriacorreia01.github.io/website-completo-rektr/" target="_blank" rel="noopener noreferrer" className='w-32 h-10 pt-2 bg-gradient-to-t rounded-full from-purple-300 to-purple-600 text-white transition duration-300 ease-in-out hover:from-purple-600 hover:to-purple-800'>Projeto</a>
            <a href="https://github.com/Victtoriacorreia01/website-completo-rektr" target="_blank" rel="noopener noreferrer" className='w-32 h-10 pt-2 border rounded-full transition duration-300 ease-in-out hover:bg-gray-200'>Ver o código</a>
            </div>
          </div>
        </div>
      </div>
      <section id='tecnologias' className="bg-white py-12 mx-auto w-full max-w-screen-lg">
          <div className="container mx-auto text-center">
            <h1 data-aos="fade-up" className="text-3xl font-bold mb-8 mt-12">Habilidades</h1>
            <hr className='border-t border-purple-600 my-2'></hr>
            <div className=" boxs grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10">
            <div data-aos="fade-up" className="bg-white rounded-lg p-6 shadow-md h-60 w-80 mt-8 flex flex-col justify-center items-center hover:bg-purple-50 hover:border-gray-300 hover:border cursor-pointer  box">
                <FontAwesomeIcon icon={faFigma} className="text-purple-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Figma</h3>
                <p className="text-sm text-gray-700">Ferramenta de design de interface do usuário (UI) e experiência do usuário (UX) baseada em navegador.</p>
              </div>
              <div data-aos="fade-down" className="bg-white rounded-lg p-6 shadow-md h-60 w-80 mt-8 flex flex-col justify-center items-center hover:bg-purple-50 hover:border-gray-300 hover:border cursor-pointer box">
                <FontAwesomeIcon icon={faReact} className="text-blue-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">React.js</h3>
                <p className="text-sm text-gray-700">Desenvolvimento de componentes de interface do usuário para aplicativos móveis e Web baseados em JavaScript.</p>
              </div>
              <div data-aos="fade-up" className="bg-white rounded-lg p-6 shadow-md h-60 w-80 mt-8 flex flex-col justify-center items-center hover:bg-purple-50 hover:border-gray-300 hover:border cursor-pointer box">
                <FontAwesomeIcon icon={faPython} className="text-black text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Python</h3>
                <p className="text-sm text-gray-700">Linguagem de programação de alto nível, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p>
              </div>
              <div data-aos="fade-down" className="bg-white rounded-lg p-6 shadow-md h-60 w-80 mt-8 flex flex-col justify-center items-center hover:bg-purple-50 hover:border-gray-300 hover:border cursor-pointer box">
                <FontAwesomeIcon icon={faHtml5} className="text-red-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">HTML E CSS</h3>
                <p className="text-sm text-gray-700">Linguagem de marcação e linguagem de estilos: cor, fonte, o layout e muito mais.</p>
              </div>
              <div data-aos="fade-up" className="bg-white rounded-lg p-6 shadow-md h-60 w-80 mt-8 flex flex-col justify-center items-center hover:bg-purple-50 hover:border-gray-300 hover:border cursor-pointer box">
                <FontAwesomeIcon icon={faJs} className="text-yellow-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">JAVASCRIPT</h3>
                <p className="text-sm text-gray-700">Linguagem de programação amplamente utilizada no front-end para diferentes finalidades.</p>
              </div>
              <div data-aos="fade-down" className="bg-white rounded-lg p-6 shadow-md h-60 w-80 mt-8 flex flex-col justify-center items-center hover:bg-purple-50 hover:border-gray-300 hover:border cursor-pointer box">
                <FontAwesomeIcon icon={faNodeJs} className="text-green-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Next.js</h3>
                <p className="text-sm text-gray-700">framework de desenvolvimento web front-end React de código aberto que permite criar aplicativos da web modernos e poderosos.</p>
              </div>
            </div>
          </div>
    </section>
      <section id='sobremim' className='mt-20 bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 data-aos="fade-down" className='text-3xl font-bold mb-8 text-center text-black'>Sobre Mim</h2>
          <hr data-aos="fade-down" className='border-t border-purple-300 my-2'></hr>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <div className="md:w-1/2 flex items-center justify-center md:justify-start mt-10">
                <img  data-aos="fade-up"
                      src={FotoVicttoria}
                      alt="Foto de Victtoria Correia"
                      className=" img1 w-40 h-40 rounded-full mb-4 ml-32"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />


                    <img
                                src="/src/assets/developer.png"
                                alt=""
                                className={` img2 w-25 ml-4 mt-0 flying`}
                            />
              </div>
              <div className="md:text-left mt-6 md:mt-0">
                <h3 data-aos="fade-down" className="font-semibold text-center md:text-left text-3xl text-purple-900">Sou Dev - Victtoria Correia</h3>
                <p className="text-center md:text-left text-lg mt-6 text-gray-700" data-aos="fade-down">Olá, meu nome é Victtoria Correia, tenho 22 anos e estou cursando Análise e Desenvolvimento de Sistemas na Unichristus. Tenho experiência em Python, HTML5, CSS, JavaScript, React.js, Next.js, Tailwind, Bootstrap e Figma. Sou determinada, focada, extremamente criativa e aprendo rapidamente com eficiência. Estou pronta para ingressar no mercado de trabalho!</p>
                <hr className='border-t border-purple-300 my-8'></hr>
              </div>
            </div>
            <div className="border-l md:hidden h-1/2 border-purple-900"></div>
            <div data-aos="fade-left" className="md:w-1/2 md:ml-16 p-8 md:p-10 bg-white border border-gray-200 shadow-lg shadow-purple-300 rounded-lg">
              <h2 className='text-2xl font-semibold text-purple-900 mb-6'>Informações</h2>
              <div className='mt-4'>
                <p className='flex items-center text-gray-700'><FontAwesomeIcon icon={faCalendarAlt} className='text-purple-800 mr-2' />Data de Nascimento: 11 de Dezembro de 2001</p>
                <p className='flex items-center text-gray-700 mt-4'><FontAwesomeIcon icon={faLanguage} className='text-purple-800 mr-2' />Inglês: Intermediário</p>
                <p className='flex items-center text-gray-700 mt-4'><FontAwesomeIcon icon={faLocationDot} className='text-purple-800 mr-2' />Endereço: Fortaleza - Papicu</p>
                <p className='flex items-center text-gray-700 mt-4'><FontAwesomeIcon icon={faLanguage} className='text-purple-800 mr-2' />Língua Materna: Português</p>
                <p className='flex items-center text-gray-700 mt-4'><FontAwesomeIcon icon={faEarthAmericas} className='text-purple-800 mr-2' />Nacionalidade: Brasileira</p>
                <p className='flex items-center text-gray-700 mt-4'><FontAwesomeIcon icon={faPhone} className='text-purple-800 mr-2' />Telefone: (85) 99191-2650</p>
                <p className='flex items-center text-gray-700 mt-4'><FontAwesomeIcon icon={faEnvelope} className='text-purple-800 mr-2' />E-mail: victtoria.correia01@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 gap-8">
      <section id='experiencia' className='py-10 mt-12'>
        <div className='container m-auto px-4'>
          <h2 data-aos="fade-right" className='text-2xl font-semibold text-center'>Educação</h2>
          <hr className='border-t border-purple-600 my-2 mt-5'></hr>
          <div className='lineone mt-12 relative before:absolute before:top-0 before:left-0 before:bottom-0 before:w-2 before:bg-black before:rounded-lg'>
            <div  data-aos="fade-right" className='pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1  '>
              <h3 className='absolute -left-14 text-lg font-semibold'>2018</h3>
              <p>Diploma de ensino medio completo pelo colegio 7 de setembro - Brasil</p>
            </div>
            <div  data-aos="fade-right" className='pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
              <h3 className='absolute -left-14 text-lg font-semibold'>2023</h3>
              <p>Certificado HTML5 E CSS pela plataforma Alura. </p>
            </div>
            <div  data-aos="fade-right" className=' pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
              <h3 className='absolute -left-14 text-lg font-semibold'>2023</h3>
              <p>Certificado Python do basico ao avançado pela plataforma Alura.</p>  
            </div>
            <div  data-aos="fade-right" className=' pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
              <h3 className='absolute -left-14 text-lg font-semibold'>2023</h3>
              <p>Certificado Curso em video - Python.</p>  
            </div>
            <div  data-aos="fade-right" className='pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
              <h3 className='absolute -left-14 text-lg font-semibold'>2023</h3>
              <p>Certificado Curso React.js pela plataforma Alura..</p>  
            </div>
            <div  data-aos="fade-right" className='pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
              <h3 className='absolute -left-14 text-lg font-semibold'>2023</h3>
              <p>Certificado Curso da linguagem JavaScript pela plataforma Alura</p>
            </div>
            <div  data-aos="fade-right" className='pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
              <h3 className='absolute -left-14 text-lg font-semibold'>2023</h3>
              <p>Certificado Figma( interface components and visual design): pela plataforma Alura.</p>  
            </div>
            <div  data-aos="fade-right" className='pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
              <h3 className='absolute -left-14 text-lg font-semibold'>2024</h3>
              <p>Faculdade de Analise e Desenvolvimento de Sistemas - Universidade Unichristus - Fortaleza (Em andamento)</p>  
            </div>
          </div>
        </div>
      </section>
        <section id='experiencia' className='py-10 mt-12'>
          <div className='container m-auto px-4'>
            <h2 data-aos="fade-left" className='text-2xl font-semibold text-center '>Experiência</h2>
            <hr className='border-t border-purple-600 my-2 mt-5'></hr>
            <div className='linetwo mt-12 relative before:absolute before:top-0 before:left-0 before:bottom-0 before:w-2 before:bg-black  before:rounded-lg'>
              <div data-aos="fade-left" className='pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1 '>
              <h3 className='absolute -left-14 text-lg font-semibold'>2023</h3>
                <p>Experiência criando landing pages com HTML , CSS e JavaScript puro! </p>
              </div>
              <div data-aos="fade-left" className='pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
              <h3 className='absolute -left-14 text-lg font-semibold'>2024</h3>
                <p>Experiência de estágio em Construtora, colaborando com a parte front end de um sistema automatizado com Next.js e tailwind.</p>
              </div>
              <div data-aos="fade-left" className=' pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
                <h3 className='absolute -left-14 text-lg font-semibold'>2024</h3>
                <p>Projeto em grupo da Faculdade criando um website completo com React.js (Em andamento)</p>  
              </div>
              <div data-aos="fade-left" className=' pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
                <h3 className='absolute -left-14 text-lg font-semibold'>2024</h3>
                <p>Construção de carrinho de compras criado com Context API do React, garantindo que as informações sejam compartilhadas entre diferentes componentes. responsivo e o deploy realizado com Vercel.</p>  
              </div>
              <div data-aos="fade-left" className='pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
                <h3 className='absolute -left-14 text-lg font-semibold'>2024</h3>
                <p>Construção de Lading page com Next.js e tailwind com envio de email. Ultilização de Vercel, GitHub e Git</p>  
              </div>
              <div data-aos="fade-left" className='pt-10 pl-10 relative before:w-4 before:h-4 before:bg-purple-400 before:absolute before:rounded-full before:-left-1'>
                <h3 className='absolute -left-14 text-lg font-semibold'>2024</h3>
                <p>Construção de um pagina de login</p>  
              </div>
              
            </div>
          </div>
        </section>
      </div>
        <footer className="bg-white text-black py-8 mt-14 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:col-span-3">
                <p className="text-1xl mb-6">Todos os direitos reservados DEV VIC &copy; 2024</p>
                <ul className="flex items-center justify-center">
                  <li className="inline-block mr-4">
                    <a href="https://www.linkedin.com/in/victtoria-correia-3268v/" className="text-white hover:text-gray-300">
                      <FaLinkedinIn className='text-purple-500 text-4xl hover:text-black'/>
                    </a>
                  </li>
                  <li className="inline-block mr-4">
                    <a href="https://www.instagram.com/victtoria_correia?igsh=MWhxZWN6Z2U3MHVvNg%3D%3D&utm_source=qr" className="text-white hover:text-gray-300">
                      <FaInstagram className='text-purple-500 text-4xl hover:text-black'/>
                    </a>
                  </li>
                  <li className="inline-block">
                    <a href="https://github.com/Victtoriacorreia01" className="text-white hover:text-gray-300">
                      <FaGithubAlt className='text-purple-500 text-4xl hover:text-black'/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </section>
</main>

    </>
  )
}

export default App
