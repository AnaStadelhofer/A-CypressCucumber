Feature: Listagem de produtos

Scenario: Ordenar itens na listagem
    Given que o usuário esteja logado
    When que seja alterado a ordenção
    Then os itens devem ser reordenados