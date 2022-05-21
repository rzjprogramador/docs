import { PrismaClient } from '@prisma/client'

// IMPORTACOES DE MAKE SEEDS
// import { makeSeedHellos } from '../src/domain/entities/hello/resources/use-dados/makeSeedHellos'

const prisma = new PrismaClient()

async function main() {
  /* CHAMAR AQUI AS FUNCOES FABRICAS DE SEED* /
  /* ESTE SEED JA SERÁ RODADO PELO SCRIPT PRETEST : OU MANUAL : ```yarn prisma db seed``` */

  // makeSeedHellos()

  const helloUm = await prisma.hello.upsert({
    where: { unico: 'unico_1' }, // TENHO QUE DEFINIR A CONDICAO APRA APLICA ROS DADOS
    update: {},
    create: {
      um: 'um_1',
      dois: 'dois_1',
      unico: 'unico_1',
    },
  }) //

  const helloDois = await prisma.hello.upsert({
    where: { unico: 'unico_2' }, // define condicao para aplicar os dados
    update: {},
    create: {
      um: 'um_2',
      dois: 'dois_2',
      unico: 'unico_2',
    },
  }) //

  const helloTres = await prisma.hello.upsert({
    where: { unico: 'unico_3' }, // define condicao para aplicar os dados
    update: {},
    create: {
      um: 'um_3',
      dois: 'dois_3',
      unico: 'unico_3',
    },
  }) //

}

// INVOCAR MAIN() E TRATAR ERROS
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
