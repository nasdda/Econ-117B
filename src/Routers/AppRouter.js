import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ToolBar from '../components/Navigation/Toolbar/toolbar'
import Home from '../components/Home/home'
import Practice from '../components/Practice/practice'
import Resources from '../components/Resources/resources'
import Contact from '../components/Contact/contact'
import ErrorPage from '../components/ErrorPage/errorPage'
import Spacer from '../components/Tools/spacer'
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <ToolBar />
            <Spacer>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/practice" component={Practice} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/contact" component={Contact} />
                    <Route component={ErrorPage} />
                </Switch>
            </Spacer>
        </div>

    </BrowserRouter>
)

export default AppRouter;