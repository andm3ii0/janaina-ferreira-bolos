const sabores = {
  Chocolatudo:
    "Massa sabor chocolate 100% cacau. Recheio de Brigadeiro de chocolate 50% cacau",
  "Bem casado":
    "Massa sabor chocolate 100% cacau. Recheio 2 camadas de Brigadeiro de chocolate e 1 camada de Brigadeiro de leite Ninho",
  "Red velvet com Ninho":
    "Massa vermelha e recheio de Brigadeiro de leite Ninho",
  "Tradicional Red Velvet":
    "Massa vermelha com brigadeiro de cream cheese e Geléia de morango",
  "Doce de leite com crocante":
    "Massa sabor leite Ninho e recheio de doce de leite com crocante de amendoim",
  "Ninho com morango":
    "Massa sabor leite Ninho com brigadeiro de leite Ninho e Geléia de morango",
  "Ninho com Nutella":
    "Massa sabor leite Ninho com brigadeiro de leite Ninho e Nutella",
  "Três amores":
    "Massa sabor chocolate e recheio de doce de leite, brigadeiro de Ninho e brigadeiro de chocolate",
  Branquinho: "Massa sabor leite Ninho com brigadeiro de leite Ninho",
};

export const codigoObj = {
  tamanho: {
    PP: "01",
    P: "02",
    M: "03",
    G: "04",
  },
  sabor: {
    Chocolatudo: "01",
    "Bem casado": "02",
    "Red velvet com Ninho": "03",
    "Tradicional Red Velvet": "04",
    "Doce de leite com crocante": "05",
    "Ninho com morango": "06",
    "Ninho com Nutella": "07",
    "Três amores": "08",
    Branquinho: "09",
  },
};

export const itensByCode = {
  tamanho: {
    "01": "PP",
    "02": "P",
    "03": "M",
    "04": "G",
  },
  sabor: {
    "01": "Chocolatudo",
    "02": "Bem casado",
    "03": "Red velvet com Ninho",
    "04": "Tradicional Red Velvet",
    "05": "Doce de leite com crocante",
    "06": "Ninho com morango",
    "07": "Ninho com Nutella",
    "08": "Três amores",
    "09": "Branquinho",
  },
};

export default sabores;
