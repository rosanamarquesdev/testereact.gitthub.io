// import React, { useState } from "react";
// import { AccordionContainer, AccordionContent, AccordionItem, AccordionTitle } from './style';
// import { useNavigate } from "react-router-dom";

// export const Accordion = () => {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const navigate = useNavigate();
//     const toggleAccordion = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     const accordionItems = [
//         {
//             title: "Cadastro",
//             links: [
//                 { tituloLink: "Clientes", link: "/cadastrar/cliente" },
//                 { tituloLink: "Fornecedores", link: "/cadastrar-fornecedor" },
//                 { tituloLink: "Funcionários", link: "/cadastrar-funcionarios" }
//             ]
//         },
//         {
//             title: "Serviço",
//             links: [
//                 { tituloLink: "Venda", link: "/venda" },
//                 { tituloLink: "Locação", link: "/locacao" }
//             ]
//         },
//     ];
//     function handleLink(link) {
//         navigate(link)
//     }
//     return (
//         <AccordionContainer style={{fontSize: "4rem"}}>
//             {accordionItems.map((item, index) => (
//                 <AccordionItem style={{fontSize: "4rem"}} key={index}>
//                     <AccordionTitle style={{fontSize: "4rem"}}
//                         isActive={activeIndex === index}
//                         onClick={() => toggleAccordion(index)}
//                     >
//                         <h3>{item.title}</h3>
//                     </AccordionTitle>
//                     <AccordionContent style={{fontSize: "4rem"}} isActive={activeIndex === index}>
//                         {item.links.map((link, i) => (
//                             //Aqui
//                             <div style={{fontSize: "4rem"}}>
//                                 <a  onClick={() => handleLink(link.link)} key={i}>{link.tituloLink}</a>
//                             </div>
//                         ))}
//                     </AccordionContent>
//                 </AccordionItem>
//             ))}
//         </AccordionContainer>
//     );
// };
