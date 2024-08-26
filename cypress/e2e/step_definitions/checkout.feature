Feature: Dados da compra

Scenario: Avançar sem preencher campos
    Given que o usuário esteja na tela de preenhcer dados
    When enviado sem preencher os campos
    Then deve retornar o erro "Error: First Name is required" 

Scenario: Preencher primeira etapa
    Given que o usuário esteja na tela de preenhcer dados
    When enviado com os campos preenchidos
    Then deve avançar para a próxima etapa

# Scenario: Cancelar compra
#     Given que o usuário esteja na tela de preenhcer dados
#     When clicado para cancelar a compra
#     Then deve retornar para a listagem de produto

# Scenario: Finalizar compra

