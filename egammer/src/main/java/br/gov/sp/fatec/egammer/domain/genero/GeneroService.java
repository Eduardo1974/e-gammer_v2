package br.gov.sp.fatec.egammer.domain.genero;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.sp.fatec.egammer.domain.PersistenceService;

@Service("generoService")
public class GeneroService implements PersistenceService<Genero>{
	
	@Autowired
	private GeneroRepository repository;
	
	@Override
	public Genero salvar(final Genero obj) {
		return this.repository.save(obj);
	}

	@Override
	public void excluir(final Long id) {
		this.repository.delete(id);
	}

	@Override
	public Genero buscarPorId(final Long id) {
		return this.repository.findByCodigo(id);
	}
	
	public List<Genero> buscarTodos() {
		return this.repository.buscarTodos();
	}
}
