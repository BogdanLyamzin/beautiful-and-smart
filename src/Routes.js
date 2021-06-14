import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const DaysTypesPage = lazy(() => import('./pages/DaysTypesPage' /* webpackChunkName: "DaysTypesPage" */));
const ShiftsPage = lazy(() => import('./pages/ShiftsPage' /* webpackChunkName: "ShiftsPage" */));
const PositionsPage = lazy(() => import('./pages/PositionsPage' /* webpackChunkName: "PositionsPage" */));
const EmployeesPage = lazy(() => import('./pages/EmployeesPage' /* webpackChunkName: "EmployeesPage" */));
const WorkingMonthPage = lazy(() => import('./pages/WorkingMonthPage' /* webpackChunkName: "WorkingMonthPage" */));

const Routes = () => {
    return (
    <Suspense fallback={<p>Loading...</p>}>
        <Switch>
            <Route exact path="/days" component={DaysTypesPage} />
            <Route exact path="/shifts" component={ShiftsPage} />
            <Route exact path="/positions" component={PositionsPage} />
            <Route exact path="/emloyees" component={EmployeesPage} />
            <Route exact path="/month" component={WorkingMonthPage} />
        </Switch>
    </Suspense> );
}

export default Routes;