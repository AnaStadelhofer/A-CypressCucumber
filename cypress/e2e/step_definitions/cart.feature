Feature: Itens no carrinho

# Scenario: Adicionar todos itens ao carrinho
#     Given que o usuário esteja logado
#     When adicionado todos itens ao carrinho
#     Then o carrinho deve constar o item

# Scenario: Remover um item do carrinho
#     Given que o usuário esteja logado
#     When adicionado todos itens ao carrinho
#     And removido todos os itens
#     Then o carrinho deve estar vazio

# Scenario: Continuar compra do carrinho
#     Given que o usuário esteja logado
#     When adicionado todos itens ao carrinho
#     Then o usuário deve retornar para a listagem

# Scenario: Efetuar o checkout
#     Given que o usuário esteja logado
#     When adicionado todos itens ao carrinho
#     And acessado o carrinho e efetuado o checkout
#     Then deve aparecer a tela para preencher os dados

Scenario Outline: Adicionar um item
    Given que o usuário esteja logado
    When adicionado o <item> no carrinho
    Then o carrinho deve constar o item
    Examples:
        | item                |
        | Sauce Labs Backpack |
        | batata              |

