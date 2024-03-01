export async function GET(req) {
  const users = [
    { id: 1, name: 'Mike' },
    { id: 2, name: 'Sergey' },
    { id: 3, name: 'Valya' },
  ];

  return new Response(JSON.stringify(users));
}
