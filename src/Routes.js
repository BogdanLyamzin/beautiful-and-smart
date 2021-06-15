import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import StepperPage from './pages/StepperPage';

const Routes = () => {
    return (
    <Suspense fallback={<p>Loading...</p>}>
        <Switch>
            <Route exact path="/days" component={StepperPage} />
            <Route exact path="/shifts" component={StepperPage} />
            <Route exact path="/positions" component={StepperPage} />
            <Route exact path="/emloyees" component={StepperPage} />
            <Route exact path="/month" component={StepperPage} />
        </Switch>
    </Suspense> );
}

export default Routes;