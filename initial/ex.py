a = float(input('digite a primeira nota:'))
b = float(input('digite a segunda nota:'))
c = float(input('digite a terceira nota:'))

media = (a+b+c)/3

if media < 10:
    print(f'Com a média {media}, o aluno está reprovado')
else:
    print(f'Com a média {media}, o aluno está aprovado')
