import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
  Por padrão, são utilizados até 5 rodas:
  index -> lista todos os usuários -> GET
  store/create -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PATCH ou PUT*
    -- PATCH para alterar um valor
    -- PUT alterar um objeto inteiro

  Se um controler tem mais do que esses 5, provavelmente, está errado
  e estarei fazendo um controler fazer mais do que ele precisa e seria,
  então, o caso de criar um novo controller.
 */
