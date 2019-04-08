describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33),'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "4567890123" para "1234567890" con offset 3', () => {
      assert.equal(cipher.encode('1234567890', 3),'4567890123');
    });    
//Ejemplo de 100% en el test (cubrir todos los casos)
    it('debería retornar "áéíóúÁÉÍÓÚñÑ" para "áéíóúÁÉÍÓÚñÑ" con offset 3', () => {
      assert.equal(cipher.encode('áéíóúÁÉÍÓÚñÑ', 3),'áéíóúÁÉÍÓÚñÑ');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33),'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "1234567890" para "4567890123" con offset 3', () => {
      assert.equal(cipher.decode('4567890123', 3),'1234567890');
    });
//Ejemplo de 100% en el test (cubrir todos los casos)
    it('debería retornar "áéíóúÁÉÍÓÚñÑ" para "áéíóúÁÉÍÓÚñÑ" con offset 3', () => {
      assert.equal(cipher.decode('áéíóúÁÉÍÓÚñÑ', 3),'áéíóúÁÉÍÓÚñÑ');
    });
  });
});