package br.gov.sp.fatec.egammer.domain.game;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<Game, Long> {
	
	public Game findByCodigo(final Long codigo);
	
	@Query("select g from Game g join g.genero gen ")
	public List<Game> buscarTodos();
	
	@Query("select g from Game g where g.genero.codigo =?1")
	public List<Game> buscaPorGenero(final Long codigo);
	
	@Query("select g from Game g where g.titulo like %?1%")
	public List<Game> buscaPorTitulo(final String titulo);
	
	@Query("select g from Game g ORDER BY rand()")
	public List<Game> buscaDestques();
	
}
