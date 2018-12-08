import { bootstrap } from 'vesper';
import { PointsController } from './controller/PointsController';
import { Points } from './entity/Points';
import { User } from './entity/User';

bootstrap({
  port: 4000,
  controllers: [
    PointsController
  ],
  entities: [
    Points,
    User
  ],
  schemas: [
    __dirname + '/schema/**/*.graphql'
  ],
  cors: true
}).then(() => {
  console.log('Your app is up and running on http://localhost:4000. ' +
    'You can use playground in development mode on http://localhost:4000/playground');
}).catch(error => {
  console.error(error.stack ? error.stack : error);
});