package br.gov.sp.fatec.egammer.domain.genero;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface GeneroRepository extends CrudRepository<Genero, Long> {
	
	public Genero findByCodigo(final Long codigo);
	
	@Query("select g from Genero g")
	public List<Genero> buscarTodos();
}
