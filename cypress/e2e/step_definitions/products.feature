Feature: Listagem de produtos

Scenario: Ordenar itens na listagem
    Given que o usuário esteja logado
    When que seja alterado a ordenção
    Then os itens devem ser reordenados

Scenario: Visualizdo o produtos
    Given que o usuário esteja logado
    When clicado no nome do produto
    Then deve ser exibido o produto completo

Scenario: Adicionado ao carrinho na visualização
    Given que o usuário esteja logado
    When clicado no nome do produto
    And adicionado no carrinho
    Then o usuário deve retornar para a listagem