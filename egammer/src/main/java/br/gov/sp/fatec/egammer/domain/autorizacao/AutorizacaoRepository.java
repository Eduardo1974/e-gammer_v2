package br.gov.sp.fatec.egammer.domain.autorizacao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface AutorizacaoRepository extends CrudRepository<Autorizacao, Long> {

	public List<Autorizacao> findByNomeContainsIgnoreCase(String nome);
	
}
