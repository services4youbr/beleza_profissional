# App de beleza - profissional

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/70388dce5167425998b2a792ee459f2a)](https://app.codacy.com/app/rodrigo.freitas/beleza_profissional?utm_source=github.com&utm_medium=referral&utm_content=services4youbr/beleza_profissional&utm_campaign=badger)
[![Waffle.io - Columns and their card count](https://badge.waffle.io/services4youbr/beleza_profissional.svg?columns=all)](https://waffle.io/services4youbr/beleza_profissional)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/90ef04eec9dc45d1989301cd86df6ccb)](https://www.codacy.com/app/rodrigo.freitas/beleza_profissional?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=services4youbr/beleza_profissional&amp;utm_campaign=Badge_Grade)


+ [Site oficial do ionic](https://ionicframework.com/getting-started)
+ [Tutorial Ionic com PWA](https://blog.ionicframework.com/how-to-make-pwas-with-ionic/)
+ [Ionic cli](https://ionicframework.com/docs/cli/generate/)
+ [Debug](http://www.damirscorner.com/blog/posts/20161122-DebuggingIonic2AppsInChromeFromVisualStudioCode.html)
+ [Calendar](https://www.npmjs.com/package/ionic2-calendar)

## Requisitos iniciais
Precisamos seguir o seguinte fluxo:
- Cadastro da profissional
- Login
- Página inicial com uma agenda dela
- Receber uma solicitação
- Confirmação da solicitação
- Acompanhamento da solicitação
- Receber pagamento
- Finalização do fluxo com avaliação da cliente

# Angular

## Criar um componente
Para criar um componente, vá ao terminal e digite `ng g c nome-do-componente`

## Criar um serviço
Para criar um serviço, vá ao terminal e digite `ng g s nome-do-serviço`

## Servidor local
Para rodar um servidor local, vá ao terminal e digite `ng serve`, caso queira com que alguém da rede veja o site, digite `ng serve --host=ip-da-sua-maquina --port=numero-da-porta`. Navegue pela url `http://localhost:4200` ou pelo número do ip e a porta selecionada. Caso não escolha a porta, o padrão é 4200.

## Build
Para gerar a versão de produção, vá ao terminal e digite `ng build`. O Angular criará uma pasta `dist`. Utilize `--prod` para gerar os arquivos para produção. caso dê alguma erro no build, digite `ng build --prod --aot false`

## Gerar tags de versão
Toda sexta-feira, final de sprint ou o site estiver pronto, será gerada uma tag de versionamento. Para gerar uma tag no git, digite `git tag <tag-name>` e depois digite `git push origin --tags` para que a tag vá para o repositório remoto
