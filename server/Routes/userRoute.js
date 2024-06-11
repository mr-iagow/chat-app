const express = require("express");
const { registerUser, loginUser, findUser, getUsers } = require("../Controllers/userController");

const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Registra um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Usuário registrado com sucesso
 *       '400':
 *         description: Erro ao registrar o usuário
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Realiza o login de um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login realizado com sucesso
 *       '400':
 *         description: Erro ao realizar o login
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /api/users/find/{userId}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuário encontrado
 *       '404':
 *         description: Usuário não encontrado
 */
router.get("/find/:userId", findUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     responses:
 *       '200':
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */
router.get("/", getUsers);

module.exports = router;
