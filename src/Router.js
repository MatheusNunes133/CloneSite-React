import { Route, BrowserRouter, Switch } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial';
import Produtos from './pages/Produtos';
import SobreNos from './pages/SobreNos';
import EntreEmContato from './pages/EntreEmContato';
import GenuinoSoftware from './pages/GenuinoSoftware';

const Routes = ()=>{
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/CloneSite-React" component={PaginaInicial} exact />
                <Route path="/CloneSite-React/produtos" component={Produtos} exact />
                <Route path="/CloneSite-React/desenvolvedores" component={SobreNos} exact />
                <Route path="/CloneSite-React/entre-em-contato" component={EntreEmContato} exact />
                <Route path="/CloneSite-React/produtos/genuino-software" component={GenuinoSoftware} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
