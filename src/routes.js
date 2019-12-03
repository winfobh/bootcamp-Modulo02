import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Teste de rotas
routes.get('/', (req, res) => res.send('Veio na boa! Tá rodando maluco'));
routes.get('/juliene', (req, res) =>
  res.send(
    'Juliene sua linda, amor da minha vida! \n\tMatheus meu filho querido! \n\t\tLaura minha tuquinha!'
  )
);
routes.get('/pedro', (req, res) =>
  res.send(
    'Maninho é bom demais isso aqui, \n tô programando na velocidade da luz. \n Integração de API Restfull é demais \n tem pra tudo, para rastreamento de encomendas, \n para geolocalização, emails, notafiscal, cadastros de tudo... \né foda isso aqui!!!'
  )
);
routes.get('/mairo', (req, res) =>
  res.send(
    'Maninho é bom demais isso aqui, \n tô programando na velocidade da luz. \n Integração de API Restfull é demais \n tem pra tudo, para rastreamento de encomendas, \n para geolocalização, emails, notafiscal, cadastros de tudo... \né foda isso aqui!!!'
  )
);

// Acessivel com o Middlewares, tudo q esta depois desta linha
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
