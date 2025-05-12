
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Terms = () => {
  useEffect(() => {
    // Update page title
    document.title = "Termos de Aceite | eufacoseu.site";
    
    // Prevent copying text
    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };
    
    document.addEventListener('copy', preventCopy);
    
    return () => {
      document.removeEventListener('copy', preventCopy);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Termos de Aceite</h1>
          
          <div className="prose max-w-none select-none">
            <h2 className="text-xl font-semibold mt-6 mb-3">TERMO DE ACEITE E CONDIÇÕES GERAIS DE PRESTAÇÃO DE SERVIÇOS DIGITAIS</h2>
            
            <p className="mb-4">
              Ao acessar, contratar ou utilizar quaisquer serviços ou soluções ofertadas por meio da plataforma identificada sob o domínio eufacoseu.site, de titularidade exclusiva de seus fundadores e/ou representantes legais, o CONTRATANTE, doravante também denominado simplesmente como USUÁRIO, concorda, para todos os fins de direito, com as presentes cláusulas e condições, firmando ciência e anuência integral e irrevogável a este instrumento, que configura acordo vinculante, nos termos dos artigos 421, 422, 425 e seguintes do Código Civil Brasileiro, constituindo contrato de adesão eletrônico, regido pelas normas da legislação vigente, sem prejuízo das disposições da Lei nº 12.965/2014 (Marco Civil da Internet), Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD), Código de Defesa do Consumidor (quando cabível) e demais normativas incidentes.
            </p>
            
            <p className="mb-4">
              A prestação dos serviços consiste, em linhas gerais e não limitativas, na entrega de um website institucional ou landing page, com características básicas e padronizadas de layout, design e funcionalidade, dentro do escopo previamente delimitado pela empresa EU FAÇO SEU SITE, mediante preenchimento completo, correto e fidedigno de formulário eletrônico, cuja submissão representa manifestação inequívoca de vontade, e que será considerada suficiente para execução do serviço contratado. A entrega do referido produto digital será efetuada em até 2 (dois) dias úteis contados do recebimento válido das informações. O modelo de negócio compreende remuneração recorrente via assinatura mensal no valor previamente estipulado em R$99,00 (noventa e nove reais), valor este que poderá ser atualizado conforme índices de mercado ou critério unilateral da contratada, hipótese em que o USUÁRIO será informado com até 5 (cinco) dias úteis de antecedência.
            </p>
            
            <p className="mb-4">
              Fica estabelecido que o USUÁRIO poderá, uma única vez, e dentro do prazo improrrogável de 7 (sete) dias corridos a contar da entrega do site, requerer uma alteração pontual de conteúdo ou estrutura visual, hipótese em que a empresa avaliará a viabilidade técnica da solicitação. A não manifestação dentro do prazo implica aceite tácito. Após o referido prazo, qualquer solicitação de alteração, correção, acréscimo de seções, páginas adicionais ou ajustes diversos será tarifada à parte, no valor de R$50,00 (cinquenta reais) por evento de modificação, conforme critério exclusivo da contratada. Páginas adicionais também estarão sujeitas à cobrança de R$50,00 (cinquenta reais) cada.
            </p>
            
            <p className="mb-4">
              Todos os domínios, e-mails personalizados, servidores, licenças de software e infraestrutura tecnológica empregada na prestação dos serviços são contratados, gerenciados e mantidos diretamente pela EU FAÇO SEU SITE ou seus representantes, sob titularidade exclusiva, sendo vedada ao USUÁRIO qualquer pretensão de propriedade, posse, transferência, acesso irrestrito, código-fonte, backup ou cessão de direitos, sob pena de violação de propriedade intelectual, concorrência desleal e quebra contratual grave. Expirado o prazo de vigência do domínio (normalmente de 12 meses), e na ausência de renovação contratual formalizada, o mesmo poderá ser automaticamente extinto, tornando-se público e disponível para eventual recompra por terceiros interessados por meio dos órgãos oficiais, tais como Registro.br ou outros registradores ICANN-acreditados. A contratada não se obriga a efetuar qualquer aviso, manutenção ou renovação caso não haja continuidade contratual formal.
            </p>
            
            <p className="mb-4">
              É expressamente vedada qualquer tentativa de clonagem, cópia, espelhamento, reprodução, redistribuição, engenharia reversa, exportação de dados ou replicação parcial ou integral do site desenvolvido, bem como de suas funcionalidades, lógica de programação, interface ou estrutura de navegação, sem autorização prévia, formal e assinada pelos representantes legais da EU FAÇO SEU SITE. O descumprimento desta cláusula ensejará multa não compensatória no valor fixado de R$100.000,00 (cem mil reais), além da apuração de eventuais perdas e danos, diretos ou indiretos, bem como sanções de natureza cível e criminal, conforme arts. 186, 187, 927, 949, 950 e seguintes do Código Civil e da Lei 9.610/1998 (Lei de Direitos Autorais).
            </p>
            
            <p className="mb-4">
              Fica ainda vedado ao USUÁRIO, sob qualquer hipótese, contratar, aliciar, subcontratar ou estabelecer vínculo direto ou indireto com quaisquer colaboradores, atuais ou antigos, da empresa EU FAÇO SEU SITE, durante a vigência da contratação e por 24 (vinte e quatro) meses após o seu encerramento, sob pena de multa contratual equivalente a 12 (doze) vezes o valor da assinatura vigente, por colaborador envolvido, cumulativamente. A inobservância será considerada violação grave à cláusula de não concorrência e não aliciamento, ensejando medidas judiciais cabíveis.
            </p>
            
            <p className="mb-4">
              A inadimplência superior a 7 (sete) dias corridos da mensalidade enseja a suspensão imediata do serviço, sem necessidade de aviso prévio, com exclusão definitiva do conteúdo hospedado e perda total do material, não sendo a contratada responsável por qualquer tipo de backup, restauração ou compensação. O suporte referente ao e-mail profissional é de responsabilidade exclusiva da empresa Hostinger, devendo o USUÁRIO contatar o suporte técnico da mesma por seus canais oficiais. O serviço prestado pela EU FAÇO SEU SITE não inclui manutenção contínua, desenvolvimento sob demanda, suporte técnico permanente, segurança avançada, integração com APIs externas, nem hospedagem dedicada, salvo se contratado à parte.
            </p>
            
            <p className="mb-4">
              Todas as informações fornecidas pelo USUÁRIO, incluindo mas não se limitando a nome, telefone, e-mail, CNPJ, logotipo, imagens e conteúdos inseridos no formulário, poderão ser compartilhadas com a empresa Eu Faço Seu Marketing, parceira institucional da contratada, para fins de análise, oferta de serviços complementares, enriquecimento de dados e eventuais ações de marketing e CRM, nos termos autorizados pela Lei nº 13.709/2018 (LGPD), art. 7º, incisos V e IX. O aceite deste termo implica consentimento específico e informado para tal finalidade.
            </p>
            
            <p className="mb-4">
              Por fim, a contratada não se responsabiliza, em nenhuma hipótese, pelo conteúdo publicado no site do USUÁRIO, sendo este integralmente de sua autoria, curadoria e responsabilidade, incluindo o cumprimento de direitos autorais, legislação publicitária, informações falsas, promessas de venda, segurança jurídica ou qualquer tipo de dano a terceiros. A contratada atua exclusivamente como prestadora de serviço técnico e operacional de montagem e publicação de site, não exercendo curadoria, auditoria ou verificação de legitimidade sobre o conteúdo apresentado. O USUÁRIO, portanto, declara ciência de que é o único e exclusivo responsável, perante a lei, por qualquer infração civil, penal, trabalhista ou administrativa que vier a ocorrer em razão do uso do site por ele fornecido ou veiculado.
            </p>
            
            <p className="mb-4">
              O presente instrumento será regido pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Bernardo do Campo/SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja, para dirimir quaisquer controvérsias oriundas da interpretação ou execução do presente termo.
            </p>
          </div>
          
          <div id="briefing" className="mt-10 text-center">
            <Link to="/#briefing" className="btn-primary inline-block py-3 px-6">
              Voltar para o formulário
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Terms;
