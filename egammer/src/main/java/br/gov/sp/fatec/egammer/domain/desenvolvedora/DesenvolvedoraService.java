package br.gov.sp.fatec.egammer.domain.desenvolvedora;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.sp.fatec.egammer.domain.PersistenceService;
@Service("desenvolvedoraService")
public class DesenvolvedoraService implements PersistenceService<Desenvolvedora>{
	
	@Autowired
	private DesenvolvedoraRepository repository;
	
	@Override
	public Desenvolvedora salvar(final Desenvolvedora obj) {
		return this.repository.save(obj);
	}

	@Override
	public void excluir(final Long id) {
		this.repository.delete(id);
	}

	@Override
	public Desenvolvedora buscarPorId(final Long id) {
		return this.repository.findByCodigo(id);
	}
	
	public List<Desenvolvedora> buscarTodos() {
		return this.repository.buscarTodos();
	}

}
