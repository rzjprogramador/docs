{
  campos_padrao: `
  
  id          String?
  idDB        String    @id @default(uuid())
  indexRef    Int?      @default(autoincrement())
  createdAt   DateTime? @default(now())
  updated     DateTime? @updatedAt()
  ultimoLogin DateTime?

  @@index([nome])

  @@map("nome_tabela_plural")


    `;
}
