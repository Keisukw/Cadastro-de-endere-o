<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulário de Cadastro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/style.css"/>
    </head>

    <body class="d-flex align-items-center justify-content-center vh-100 bg-body-tertiary">
        <div class="container w-50 p-3 shadow rounded bg-white">
            <form>
                <h1 class="text-center p-2">Formulário de Cadastro</h1>
                
                <div class="row">
                    <div class="input-group mb-3 col">
                    <span class="input-group-text" id="basic-addon1">Nome</span>
                    <input type="text" id="nome" class="form-control" placeholder="Nome" aria-label="nome" aria-describedby="basic-addon1">
                    </div>
              
                    <div class="input-group mb-3 col">
                        <span class="input-group-text" id="basic-addon1">Sobrenome</span>
                        <input type="text" id="sobrenome" class="form-control" placeholder="Sobrenome" aria-label="sobrenome" aria-describedby="basic-addon1">
                    </div>
                
                </div>
                
                <div class="row">
                    <div class="input-group mb-3 col">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" id="email" class="form-control" placeholder="" aria-label="email" aria-describedby="basic-addon1">
                    </div>
              
                    <div class="input-group mb-3 col">
                        <span class="input-group-text" id="basic-addon1">Senha</span>
                        <input type="text" id="senha" class="form-control" placeholder="" aria-label="senha" aria-describedby="basic-addon1">
                    </div>
                
                </div>
                
                <h4 class="text-start p-2">Endereço</h4>
                
                <div class="row">
                    <div class="input-group mb-3 col">
                    <span class="input-group-text" id="basic-addon1">CEP</span>
                    <input type="text" id="cep" class="form-control" placeholder="00000000" aria-label="00000000" aria-describedby="basic-addon1">
                    </div>
              
                    <div class="input-group mb-3 col">
                        <span class="input-group-text" id="basic-addon1">Rua</span>
                        <input type="text" id="rua" class="form-control" placeholder="Rua" aria-label="" aria-describedby="basic-addon1">
                    </div>
                
                </div>
                
                <div class="row">
                    <div class="input-group mb-3 col">
                        <span class="input-group-text" id="basic-addon1">Bairro</span>
                    <input type="text" id="bairro" class="form-control" placeholder="Bairro" aria-label="" aria-describedby="basic-addon1">
                    </div>
                
                    <div class="input-group mb-3 col">
                        <span class="input-group-text" id="basic-addon1">Cidade</span>
                    <input type="text" id="cidade" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                    </div>
                    
                    <div class="input-group mb-3 col">
                        <span class="input-group-text" id="basic-addon1">Estado</span>
                    <input type="text" id="estado" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                    </div>
                
                </div>
                
                <div class="row">
                    <div class="input-group mb-3 col">
                        <span class="input-group-text" id="basic-addon1">Número</span>
                    <input type="text" class="form-control" placeholder="Ex: 103" aria-label="" aria-describedby="basic-addon1">
                    </div>
                
                    <div class="input-group mb-3 col">
                        <span class="input-group-text" id="basic-addon1">Complemento</span>
                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                    </div>
                    
                </div>
                
                <button class="btn btn-indigo d-grid gap-2 col-6 mx-auto">Verificar</button>
            </form>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
        <<!-- <script src="script.js"></script> -->
    </body>
</html>
