package br.gov.sp.fatec.egammer.domain.game;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.sp.fatec.egammer.domain.PersistenceService;

@Service("gameService")
public class GameService implements PersistenceService<Game>{
	
	@Autowired
	private GameRepository repository;
	
	@Override
	public Game salvar(final Game obj) {
		return this.repository.save(obj);
	}

	@Override
	public void excluir(final Long id) {
		this.repository.delete(id);
	}
	
	@Override
	public Game buscarPorId(final Long id) {
		return this.repository.findByCodigo(id);
	}
	
	public List<Game> buscarTodos() {
		return this.repository.buscarTodos();
	}
	
	public List<Game> buscarPorGenero(final Long codigo) {
		return this.repository.buscaPorGenero(codigo);
	}
	
	public List<Game> buscaDestques() {
		return this.repository.buscaDestques();
	}
	
	public List<Game> buscaPorTitulo(final String titulo){
		return this.repository.buscaPorTitulo(titulo);
	}

}
