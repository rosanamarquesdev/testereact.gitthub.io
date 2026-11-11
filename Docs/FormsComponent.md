# Componente de formulário (tutorial)

## Índice

1. [Estrutura de Pastas](#estrutura-de-pastas)
2. [Card](#card)
3. [FormFieldContainer](#formfieldcontainer)
4. [Input](#input)
5. [Label](#label)
6. [Button](#button)

## Componentes

```Folders
├── src/
│   ├── compoments/
│       └── Forms
|           ├── Button
|           ├── Card
|           ├── FormFieldContainer
|           ├── Input
|           ├── Label
├── App.js
└── index.js
```

### Card

Esse componente engloba o formulário e todo o resto.

![Image](https://github.com/user-attachments/assets/97507625-bb16-49e1-8999-542f2935c410)

Props:

- **width**: Permite escolher a largura do card;
- **title**: Define um título para o card;
- **desc**: É uma prop opcional que adiciona uma descrição logo abaixo do título;
- **variant**: Permite escolher a variant de algum card.

> Caso queira adicionar uma nova variante de Card crie ela no objeto `variants` dentro `style.jsx`

![Image](https://github.com/user-attachments/assets/7292926d-fd83-4b14-8b3a-28051be57149)

### FormFieldContainer

Esse componente é um container que pode englobar elementos do formulário, como um button ou o mais necessário: **label + input**

![Image](https://github.com/user-attachments/assets/86b61609-f10d-4283-a133-3e698b1cf1c1)

Props:

- **variant**: Permite escolher a variant de campo;

> Caso queira adicionar uma nova variante de container de campo crie ela no objeto `variants` dentro `style.jsx`

![Image](https://github.com/user-attachments/assets/4f501dda-c195-451f-bf09-e87ecd361529)

### Input

![Image](https://github.com/user-attachments/assets/694ab2f6-628b-483f-b497-72c56b914db8)

Props:

- **heigth**: Permite definir uma altura personalizada para o input.
- **...props**: representa qualquer atributo que seja passado diretamente no componente, como **"required, type, className, id e etc"**

![Image](https://github.com/user-attachments/assets/10a21986-d6dc-46ed-85fc-deb18579343c)

### Label

![Image](https://github.com/user-attachments/assets/5a1fc03d-e393-4b01-96a9-0cfa5260b722)

Props:

- **...props**: representa qualquer atributo que seja passado diretamente no componente, como **"required, type, className, id e etc"**

> Label não possui variantes no momento.

### Button

![Image](https://github.com/user-attachments/assets/1819900d-9f9d-4234-8494-4a521e5df5a1)

Props:

- **width**: Permite definir uma largura personalizada para o botão;
- **variant**: Permite escolher a variant de botão;
- **hover**: Permite **ativar ou desativar** o hover do botão, você decide se quer ou não passando false na prop (ela **é true por padrão**);
- **...props**: representa qualquer atributo que seja passado diretamente no componente, como **"onclick, id, className e etc"**

> Caso queira adicionar uma nova variante de botão crie ela no objeto `variants` dentro `style.jsx`

![Image](https://github.com/user-attachments/assets/4e5c65c5-ca24-4777-8973-6a935539a332)
