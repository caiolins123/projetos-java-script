import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const gerente = new Gerente("Ricardo", 5000, 12345678940);
gerente.cadastrarSenha("123456")
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345");

const cliente = new Cliente("Laís", 51859594875, "caiolins123");


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "caiolins123")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

//polimorfismo seria passar qualquer propriedade que derive de funcionario e ele aceita, tipo, o gerente e o diretor podem buscar a funcao cadastraSenha.  

















//import {ContaCorrente} from "./Conta/ContaCorrente.js"
//import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
//import { ContaSalario } from "./Conta/ContaSalario.js";

//const cliente1 = new Cliente("Ricardo" , 11122233309);

//const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
//const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
//const contaSalario = new ContaSalario(cliente1);
//contaSalario.depositar(100);
//contaSalario.sacar(10);

//console.log(contaSalario)