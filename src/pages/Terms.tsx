
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    // Update page title
    document.title = "Termos de Aceite | eufacoseu.site";
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Termos de Aceite</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Introdução</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. Serviços</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">3. Pagamentos</h2>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">4. Responsabilidades do Cliente</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
            <ul className="list-disc pl-6 mt-3">
              <li>Fornecer informações precisas e completas para o desenvolvimento do site;</li>
              <li>Revisar o site dentro do prazo estabelecido após a entrega;</li>
              <li>Realizar o pagamento conforme acordado, apenas se estiver satisfeito;</li>
              <li>Utilizar o site de acordo com as leis e regulamentos aplicáveis;</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">5. Confidencialidade</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">6. Propriedade Intelectual</h2>
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">7. Disposições Gerais</h2>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/#briefing" className="btn-primary inline-block py-3 px-6">
              Voltar para o formulário
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
