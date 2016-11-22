package br.gov.sp.fatec.egammer.domain.desenvolvedora;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface DesenvolvedoraRepository extends CrudRepository<Desenvolvedora, Long>{
	
	public Desenvolvedora findByCodigo(final Long codigo);
	
	@Query("select d from Desenvolvedora d")
	public List<Desenvolvedora> buscarTodos();
}
