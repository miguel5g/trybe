const state = 'approved';

switch (state) {
  case 'approved':
    console.log('Aprovado!');
    break;

  case 'list':
    console.log('Na lista de espera.');
    break;

  case 'rejected':
    console.log('Reprovado.');
    break;

  default:
    console.log('Não se aplica.');
    break;
}
