package br.gov.sp.fatec.egammer.domain;

public interface PersistenceService<T> {
	
	public T salvar(final T obj);
	
	public void excluir(final Long id);
	
	public T buscarPorId(final Long id);

}
