Feature: Login do usuário

Scenario: Logar com sucesso
    Given que o site seja acessado
    When preenchido as credenciais de acesso "standard_user"
    Then o usuário deve logar

Scenario: Login invalido
    Given que o site seja acessado
    When preenchido as credenciais invalídas
    Then deve retornar o erro "Epic sadface: Username and password do not match any user in this service"

Scenario: Login bloqueado
    Given que o site seja acessado
    When preenchido as credenciais de acesso "locked_out_user"
    Then deve retornar o erro "Epic sadface: Sorry, this user has been locked out."

Scenario: Login com usuário com bugs
    Given que o site seja acessado
    When preenchido as credenciais de acesso "problem_user"
    Then deve mostrar que a imagem não carregou

Scenario: Login demorado
    Given que o site seja acessado
    When preenchido as credenciais de acesso "performance_glitch_user"
    Then o usuário deve visualizar a listagem de produto


