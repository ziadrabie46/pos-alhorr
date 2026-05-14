import React from 'react'; import ReactDOM from 'react-dom/client'; import { QueryClientProvider } from '@tanstack/react-query';
import { Router, Route, Switch, Redirect } from 'wouter'; import { queryClient } from './lib/queryClient'; import './styles.css';
import AuthPage from './pages/Auth'; import POSPage from './pages/pos/POS'; import AdminLayout from './pages/admin/Layout';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><QueryClientProvider client={queryClient}><Router><Switch><Route path='/auth' component={AuthPage}/><Route path='/pos' component={POSPage}/><Route path='/admin/:rest*' component={AdminLayout}/><Route><Redirect to='/auth'/></Route></Switch></Router></QueryClientProvider></React.StrictMode>);
